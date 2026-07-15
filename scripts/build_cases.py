#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates src/casesData.ts from the training package's student exercises
(Case*_Exercise.md), so the site shows EXACTLY what the student pack says.

Usage:  python3 scripts/build_cases.py [path-to-AI-Training-AIIB-CTL]
Re-run whenever the exercises change, then rebuild the site.
"""
import glob
import html
import json
import os
import re
import sys

PKG = sys.argv[1] if len(sys.argv) > 1 else \
    "/Users/tomyyw/Desktop/Dev/AI 培训/AIIB 培训/AI-Training-AIIB-CTL"
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   "src", "casesData.ts")

APPS = {1: "Excel", 2: "Excel", 3: "Excel", 4: "Excel",
        5: "Word", 6: "PowerPoint", 7: "Excel + Word"}
DATA_FILES = {
    1: "Data_Case01_Admin_Expense_Ledger.xlsx",
    2: "Data_Case02_Accrual_Consolidation.xlsx",
    3: "Data_Case03_Invoice_Register.xlsx",
    4: "Data_Case04_Budget_vs_Actuals.xlsx",
    5: "Data_Case05_Reporting_Pack_Inputs.xlsx",
    6: None,  # uses the Case 5 memo (reference memo offered instead)
    7: "Data_Case07_Investment_FV_Rollforward.xlsx",
}


def esc(s):
    return html.escape(s, quote=False)


def inline(s):
    """bold / italics / code on an escaped string."""
    s = esc(s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<![\w*])\*([^*\n]+)\*(?![\w*])", r"<em>\1</em>", s)
    s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
    return s


def md_to_html(md):
    lines = md.splitlines()
    out, tbl, ul, ol = [], [], [], []

    def flush_tbl():
        nonlocal tbl
        if not tbl:
            return
        head, rows = tbl[0], tbl[1:]
        h = "<table><thead><tr>" + "".join(
            f"<th>{inline(c)}</th>" for c in head) + "</tr></thead><tbody>"
        for r in rows:
            h += "<tr>" + "".join(
                f"<td>{inline(r[i] if i < len(r) else '')}</td>"
                for i in range(len(head))) + "</tr>"
        out.append(h + "</tbody></table>")
        tbl = []

    def flush_ul():
        nonlocal ul
        if ul:
            out.append("<ul>" + "".join(ul) + "</ul>")
            ul = []

    def flush_ol():
        nonlocal ol
        if ol:
            out.append("<ol>" + "".join(ol) + "</ol>")
            ol = []

    def flush_all():
        flush_tbl(); flush_ul(); flush_ol()

    for raw in lines:
        s = raw.rstrip()
        if s.startswith("|"):
            flush_ul(); flush_ol()
            cells = [c.strip() for c in s.strip("|").split("|")]
            if not re.match(r"^[\s:\-]+$", "".join(cells)):
                tbl.append(cells)
            continue
        flush_tbl()
        if not s.strip():
            flush_all()
            continue
        m = re.match(r"^(#{1,4})\s+(.*)$", s)
        if m:
            flush_all()
            lvl = min(len(m.group(1)) + 2, 5)  # #->h3 ... ####->h5 (page owns h1/h2)
            out.append(f"<h{lvl}>{inline(m.group(2))}</h{lvl}>")
            continue
        if s.strip() == "---":
            flush_all()
            continue
        cb = re.match(r"^\s*-\s*\[([ xX])\]\s*(.*)$", s)
        if cb:
            flush_ol()
            ul.append(f'<li class="check">{inline(cb.group(2))}</li>')
            continue
        mb = re.match(r"^\s*[-*]\s+(.*)$", s)
        if mb:
            flush_ol()
            ul.append(f"<li>{inline(mb.group(1))}</li>")
            continue
        mo = re.match(r"^\s*\d+\.\s+(.*)$", s)
        if mo:
            flush_ul()
            ol.append(f"<li>{inline(mo.group(1))}</li>")
            continue
        if s.startswith(">"):
            flush_all()
            out.append(f"<blockquote>{inline(s.lstrip('> ').strip())}</blockquote>")
            continue
        flush_all()
        out.append(f"<p>{inline(s)}</p>")
    flush_all()
    return "\n".join(out)


def parse_case(path, num):
    md = open(path, encoding="utf-8").read()
    lines = md.splitlines()
    # drop the top-level title/subtitle lines - the component renders its own header
    body_lines = [l for i, l in enumerate(lines)
                  if not (l.startswith("# ") or (l.startswith("## ") and i < 6))]
    md_body = "\n".join(body_lines)
    title = next((l[2:].strip() for l in lines if l.startswith("# ")), f"Case {num}")
    sub = next((l[3:].strip() for l in lines if l.startswith("## ")), "")
    # split title "Case 1　Excel · Data Splitting — two ways" -> label after the number
    tm = re.match(r"^Case\s*\d+\s*[　·:\-]*\s*(.*)$", title)
    label = tm.group(1).strip() if tm else title
    body_html = md_to_html(md_body)
    # estimated time / difficulty from the meta table
    est = ""
    diff = 0
    for l in lines:
        if "Estimated time" in l:
            est = l.strip("|").split("|")[-1].strip()
        if "Difficulty" in l and "⭐" in l:
            diff = l.count("⭐")
    return {
        "num": num,
        "app": APPS[num],
        "label": label,
        "subtitle": sub,
        "difficulty": diff,
        "time": est,
        "dataFile": DATA_FILES[num],
        "html": body_html,
    }


def main():
    cases = []
    for d in sorted(glob.glob(os.path.join(PKG, "[0-9][0-9]_*"))):
        hits = sorted(glob.glob(os.path.join(d, "Case*_Exercise.md")))
        if not hits:
            continue
        num = int(re.match(r"^(\d+)", os.path.basename(d)).group(1))
        cases.append(parse_case(hits[0], num))
    cases.sort(key=lambda c: c["num"])
    ts = (
        "// AUTO-GENERATED by scripts/build_cases.py from the training package's\n"
        "// student exercises (Case*_Exercise.md). Do not edit by hand - edit the\n"
        "// exercises and re-run the script, so site and handout never diverge.\n\n"
        "export type CaseDoc = {\n"
        "  num: number;\n  app: string;\n  label: string;\n  subtitle: string;\n"
        "  difficulty: number;\n  time: string;\n  dataFile: string | null;\n  html: string;\n};\n\n"
        f"export const caseDocs: CaseDoc[] = {json.dumps(cases, ensure_ascii=False, indent=2)};\n"
    )
    open(OUT, "w", encoding="utf-8").write(ts)
    print(f"wrote {OUT}: {len(cases)} cases, "
          f"{sum(len(c['html']) for c in cases)} chars of case HTML")


if __name__ == "__main__":
    main()
