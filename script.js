:root {
    --bg-page: #f4f7fb;
    --bg-card: #ffffff;
    --primary: #4f46e5;
    --primary-hover: #4338ca;
    --text-dark: #111827;
    --text-muted: #6b7280;
    --border-color: #e5e7eb;
    --green: #10b981;
    --red: #ef4444;
    --gray: #9ca3af;
}

* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
body { background-color: var(--bg-page); color: var(--text-dark); line-height: 1.6; }

/* Navbar */
.navbar { background: var(--bg-card); border-bottom: 1px solid var(--border-color); padding: 1rem 0; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; }
.brand { font-size: 1.25rem; font-weight: 700; color: var(--primary); display: flex; gap: 8px; align-items: center; }
.nav-links a { text-decoration: none; color: var(--text-muted); font-weight: 500; margin-left: 20px; }
.nav-links a.active { color: var(--primary); }

/* Main Layout */
.main-container { max-width: 1000px; margin: 2rem auto; padding: 0 20px; }
.card { background: var(--bg-card); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); padding: 2rem; margin-bottom: 2rem; border: 1px solid var(--border-color); }
.card-header h2 { font-size: 1.5rem; color: var(--text-dark); margin-bottom: 0.2rem; }
.card-header p { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.95rem; }

/* Tabs */
.tab-navigation { display: flex; border-bottom: 2px solid var(--border-color); margin-bottom: 1.5rem; gap: 1rem; }
.tab-btn, .out-tab-btn { background: none; border: none; padding: 0.75rem 1rem; font-size: 1rem; font-weight: 500; color: var(--text-muted); cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: 0.2s; }
.tab-btn:hover, .out-tab-btn:hover { color: var(--text-dark); }
.tab-btn.active, .out-tab-btn.active { color: var(--primary); border-bottom-color: var(--primary); }

.tab-content, .out-tab-content { display: none; animation: fadeIn 0.3s ease; }
.tab-content.active, .out-tab-content.active { display: block; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

/* Inputs */
.input-group { margin-bottom: 1.25rem; flex: 1; }
.input-group label { display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem; }
.input-row { display: flex; gap: 1rem; }
.term-selector { display: flex; }
.term-selector select { border-radius: 6px 0 0 6px; border-right: none; width: auto; }
.term-selector input { border-radius: 0 6px 6px 0; }
.form-control { width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: 6px; font-size: 1rem; outline: none; transition: border-color 0.2s; }
.form-control:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
small { color: var(--text-muted); font-size: 0.85rem; display: block; margin-top: 0.25rem; }
.large-input { font-size: 1.1rem; padding: 1rem; font-family: monospace; }

/* Buttons */
.btn { padding: 0.75rem 1.5rem; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 1rem; border: none; transition: 0.2s; }
.btn-primary { background: var(--primary); color: white; }
.btn-primary:hover { background: var(--primary-hover); }
.btn-block { width: 100%; margin-top: 1rem; padding: 1rem; font-size: 1.1rem; }
.btn-outline { background: white; border: 1px solid var(--border-color); color: var(--text-dark); }
.btn-outline:hover { border-color: var(--primary); color: var(--primary); }
.btn-outline.active { background: var(--primary); color: white; border-color: var(--primary); }

.error-alert { background: #fee2e2; color: #b91c1c; padding: 1rem; border-radius: 6px; margin-top: 1rem; font-weight: 500; border: 1px solid #f87171; }

/* Results */
.result-banner { background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 1.5rem; text-align: center; margin-bottom: 2rem; }
.result-banner span { color: var(--primary); font-weight: 600; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1px; }
.final-expression { font-size: 2rem; font-weight: 700; font-family: monospace; color: var(--text-dark); margin-top: 0.5rem; letter-spacing: 2px; }

/* Circuit */
.circuit-toolbar { display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap; }
.circuit-canvas-wrapper { border: 1px solid var(--border-color); border-radius: 8px; background: #fafafa; overflow: hidden; }
#circuit-canvas { width: 100%; height: 500px; }

/* Truth Table */
.tt-wrapper { max-height: 400px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: 8px; box-shadow: inset 0 0 5px rgba(0,0,0,0.02); }
.truth-table { width: 100%; border-collapse: collapse; text-align: center; background: white; }
.truth-table th, .truth-table td { padding: 10px; border-bottom: 1px solid var(--border-color); border-right: 1px solid var(--border-color); }
.truth-table th { background: #f9fafb; font-weight: 600; position: sticky; top: 0; z-index: 10; box-shadow: 0 1px 0 var(--border-color); }
.truth-table button { width: 35px; height: 35px; font-weight: bold; border-radius: 6px; border: none; cursor: pointer; transition: 0.1s; }

/* Truth Table states */
.tt-btn-0 { background: #fee2e2; color: #b91c1c; }
.tt-btn-1 { background: #d1fae5; color: #047857; }
.tt-btn-X { background: #f3f4f6; color: #4b5563; } /* Dummy state */

.legend { margin-top: 10px; font-size: 0.9rem; color: var(--text-muted); }
.badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 0.8rem; }
.badge-1 { background: #d1fae5; color: #047857; }
.badge-0 { background: #fee2e2; color: #b91c1c; }
.badge-X { background: #f3f4f6; color: #4b5563; }
.match-col { background-color: #f0fdf4 !important; font-weight: 600; color: #166534; }
