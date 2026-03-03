export default function Dashboard() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        <aside className="w-64 border-r border-slate-200 dark:border-primary/20 bg-background-light dark:bg-background-dark flex flex-col">
          <div className="p-6 flex items-center gap-3">
            <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl"></span>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Facial AI</h1>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-slate-500 dark:text-slate-400">System Active</span>
              </div>
            </div>
          </div>
          <nav className="flex-1 px-4 py-4 space-y-1">
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white font-medium" href="#">
              <span className="material-symbols-outlined"></span>
              <span>Overview</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined"></span>
              <span>History</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined"></span>
              <span>Devices</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined"></span>
              <span>Settings</span>
            </a>
          </nav>
          <div className="p-4 border-t border-slate-200 dark:border-primary/20">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-100 dark:bg-primary/5">
              <img
                className="size-10 rounded-full border border-primary/30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmSc3f542y8pTrstwCXSio9BpfiyYzsDlQw_9g1zw1sgnw-qUPKNxndVuEyLpEk6u01HMWt6gTwgo4HlZyiAg7NCV5mDXtafdxWfYM5UQQnAZt3Vsq0iBWXUqG0-g7AMyIPvNoU67qBE-jH7ro8aXjTfw9tbsEYUnmsX9e-GaWqgvouaoO7mKzsFavoaxIk-YQPbQdRtaYRt9bMTyCnXVQW-wVRkFVMm_QAnlLnzrYqi7tr9bcvuo0TaJ4K2JGmWggaAKNDlqJx8KC"
                alt="User profile avatar"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">Alex Chen</p>
                <p className="text-xs text-slate-500 truncate">Security Admin</p>
              </div>
              <span className="material-symbols-outlined text-slate-400">logout</span>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#0c161a]">
          <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-primary/20">
            <div className="flex items-center gap-6">
              <h2 className="text-xl font-bold">Security Terminal</h2>
              <div className="relative w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></span>
                <input
                  className="w-full bg-slate-200/50 dark:bg-primary/10 border-none rounded-lg pl-10 py-2 text-sm focus:ring-2 focus:ring-primary/50"
                  placeholder="Search identities..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg bg-slate-200/50 dark:bg-primary/10 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm">
                <span className="material-symbols-outlined text-lg"></span>
                Enroll New Face
              </button>
            </div>
          </header>
          <div className="p-8 space-y-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-7 bg-white dark:bg-background-dark rounded-xl border border-slate-200 dark:border-primary/20 overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-200 dark:border-primary/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary"></span>
                    <h3 className="font-bold">Live Feed: Main Entrance</h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500 px-2 py-1 bg-slate-100 dark:bg-primary/10 rounded">CAM_04_WEST</span>
                </div>
                <div className="relative aspect-video bg-black group">
                  <img
                    className="w-full h-full object-cover opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPn9nGtn0CY7lH5vSk7221i01dmVXDxsHDsOwV-9M3sWlKnWcasEwhuBeyo3I0R7ux8TSWsg7Zw0m9R3U6TSmAgM-orTvBCaWo_AyKirHkSKTyDYTU4gf4m1ocoy8AQ4--G1Fkg5QuXD3yv11_OSnFGOkbCZER4HBIqsrVJyfBHXaLgjeEGMiWElzw474iB4nGTDDj1vrVyI81h-4OHvX5vob-fkrWpWa-3XLr2Z5zHQcTyfOEbSvIMXLui4Ykg0UxGNva3UCpCV4u"
                    alt="Security camera footage showing a person walking through a modern corridor"
                  />
                  <div className="absolute inset-0 p-6 pointer-events-none">
                    <div className="w-48 h-48 border-2 border-primary border-dashed rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="absolute -top-10 left-0 bg-primary px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider">Target Locked</div>
                      <div className="absolute -bottom-12 left-0 w-max bg-background-dark/80 backdrop-blur p-2 rounded border border-primary/30">
                        <p className="text-[10px] text-primary font-bold">ID: #99281 (J. Doe)</p>
                        <p className="text-[10px] text-white">Match Probability: 98.4%</p>
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-6 flex flex-col items-end gap-1">
                      <div className="h-1 w-32 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3"></div>
                      </div>
                      <span className="text-[8px] font-mono text-primary uppercase">Processing Frame...</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent"></div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                <div className="flex-1 bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-primary/20 shadow-sm">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary"></span>
                    Recognition Accuracy
                  </h3>
                  <div className="flex items-center justify-between gap-4">
                    <div className="relative size-32">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <circle className="stroke-slate-200 dark:stroke-primary/10" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                        <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="99.8, 100" strokeLinecap="round" strokeWidth="3" transform="rotate(-90 18 18)"></circle>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold">99.8%</span>
                        <span className="text-[10px] text-slate-500 uppercase">Avg Ratio</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">True Matches</span>
                        <span className="font-bold text-green-500">1,240</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">False Positives</span>
                        <span className="font-bold text-orange-400">2</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Missed Detections</span>
                        <span className="font-bold text-slate-400">5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary p-6 rounded-xl shadow-lg relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-white font-bold text-lg">System Health</h3>
                    <p className="text-white/80 text-sm mb-4">Node: Edge-Server-01 is performing optimally.</p>
                    <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors">Run Diagnostic</button>
                  </div>
                  <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-500">lan</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-primary/20 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold">Access Frequency</h3>
                  <p className="text-sm text-slate-500">Unique detections over the last 7 days</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-primary"></span>
                    <span className="text-xs text-slate-500">Total Scans</span>
                  </div>
                  <select className="bg-slate-100 dark:bg-primary/10 border-none rounded-lg text-xs font-bold py-1 px-3">
                    <option>Weekly View</option>
                    <option>Monthly View</option>
                  </select>
                </div>
              </div>
              <div className="h-64 w-full relative">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                  <defs>
                    <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#25aff4" stopOpacity="0.3"></stop>
                      <stop offset="100%" stopColor="#25aff4" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0,150 Q100,140 200,80 T400,100 T600,40 T800,120 T1000,60 V200 H0 Z" fill="url(#lineGradient)"></path>
                  <path d="M0,150 Q100,140 200,80 T400,100 T600,40 T800,120 T1000,60" fill="none" stroke="#25aff4" strokeWidth="3"></path>
                </svg>
                <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 pt-4 border-t border-slate-200 dark:border-primary/10">
                  {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d)=>(
                    <span key={d} className="text-[10px] text-slate-400 font-bold">{d}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark rounded-xl border border-slate-200 dark:border-primary/20 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-slate-200 dark:border-primary/20 flex items-center justify-between">
                <h3 className="font-bold">Recent Activity Logs</h3>
                <button className="text-primary text-sm font-bold flex items-center gap-1">
                  Export Logs
                  <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-primary/5 text-slate-500 text-xs font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Timestamp</th>
                      <th className="px-6 py-4">Identity</th>
                      <th className="px-6 py-4">Location</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Confidence</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-primary/10">
                    <tr className="hover:bg-slate-50 dark:hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-slate-400">14:22:15</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWDYrovqhZoLrlweRsSpnyiiWpfNcba4mbpMBjEVxDGCBqsDx00IIYs4-Au1iZjRvcYfvSNSoUjIGqCE4OjykKwdEl46Edq-Kg8SvP1uJEOB0k-6U1D42xkfnDD27ZMSbqsSCbupMqEVvoIkM3aD89hfWN2fNlW8vhEOIZJF75WeN-6_Dgq84HlBGl-2JRnLYpOkaJTRy3bxgc-hZpPZu3DZM9ewf7bYybFCZt0qO_7CzqKBhfLUKYCoAsk6sdibTBARnaA3RBMXVz" alt="Detected person thumbnail"/>
                          </div>
                          <div>
                            <p className="text-sm font-semibold">Jonathan Doe</p>
                            <p className="text-[10px] text-slate-500">Employee ID: #99281</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">Main Lobby North</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400">Authorized</span>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-primary">98.4%</td>
                      <td className="px-6 py-4 text-right">
                        <button className="material-symbols-outlined text-slate-400 hover:text-primary">Delete</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-slate-400">14:18:02</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                            <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ41Ad4HN_bZGdVhRaaIXpPGKQzLueIb79257Fq7fORLgriwcaDYAR_ihZ62vGfZW2Lu5H0YWAQ651OPWp0ok9FfZatPJw6EWf-c_7pAGQa3PcSC7zyT4MnrvGGc1VghgOLqsWK4InEiilqUVTfHGK-CTR8UJSATm9ja8P-JPzvsKi_Om2tAKC1_u0ZzXeaGXn8kXIoomx2AJoco1jWxYyoStAJ8Vr0GKCIxZYIRrFldJyvVtC356gWQP1Yewi5gXoQgpTTBeq0Hen" alt="Unknown person thumbnail"/>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-orange-500">Unknown Guest</p>
                            <p className="text-[10px] text-slate-500">No Profile Link</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">West Gate Entry</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-500/20 text-slate-600 dark:text-slate-400">Guest Logged</span>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-primary">N/A</td>
                      <td className="px-6 py-4 text-right">
                        <button className="material-symbols-outlined text-slate-400 hover:text-primary">Delete</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-slate-400">13:55:41</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtkwK_akup14Z0zI2AHtaUECAKxoI6dIIFLBJYF2S3llnBM_x3vJ8CAl6VifbtBrICxNI28V4cVBUSkUBasFSABvXOfcijVRoFwVRNZMoe50-tZWdprs3yzCrl1922a510kcnHXe8VoT8-sx_5sAbe56qq6zu_NXpR7OgJYKIPl27YWLL1h3WCJ93bCL5K-NTyrdJ1ZgQ2sosbGbYPTlYVYCUrunCo1HaZJUbdo6OV8O1cboxAPzRvLENTXMXss4MOnsIu96DHhHoV" alt="Detected person thumbnail"/>
                          </div>
                          <div>
                            <p className="text-sm font-semibold">Sarah Connor</p>
                            <p className="text-[10px] text-slate-500">Contractor: TechCorp</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">Server Room 4</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-primary/20 text-primary">Level 2 Access</span>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-primary">99.1%</td>
                      <td className="px-6 py-4 text-right">
                        <button className="material-symbols-outlined text-slate-400 hover:text-primary">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
