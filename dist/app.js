const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const sample = {
  role: 'AI 产品经理', industry: '企业服务 / 人工智能', companyType: 'AI 创业公司', stage: '准备投递',
  strengths: 'ToB 产品经验、复杂业务分析、数据产品、跨团队协作、AI 场景设计',
  jd: `岗位职责：\n1. 负责企业级 AI 产品的规划、需求分析、产品设计和持续迭代；\n2. 深入客户业务场景，挖掘大模型在知识检索、智能问答、数据分析等方向的落地机会；\n3. 与算法、研发、设计及业务团队紧密协作，推动产品从 0 到 1 上线；\n4. 建立产品效果指标和评测体系，基于用户反馈及数据持续优化；\n5. 跟踪大模型技术趋势和行业竞品，制定产品策略。\n\n任职要求：\n1. 3 年以上互联网或企业服务产品经验，有 ToB 产品经验优先；\n2. 了解大模型、Prompt、RAG 等技术及能力边界，有 AI 产品实践优先；\n3. 出色的需求分析、逻辑思维、数据分析和项目推进能力；\n4. 能够独立输出 PRD、原型和产品方案，结果导向；\n5. 优秀的沟通协调能力和主人翁意识。`,
  resume: `林澈｜产品经理｜4 年经验\n\n工作经历\n云启科技 产品经理 2022.03—至今\n- 负责 ERP、WMS 产品需求分析和版本迭代，完成需求文档和原型设计。\n- 参与仓储系统流程优化，跟进研发测试与客户上线。\n- 负责经营数据报表项目，梳理销售、库存、履约等指标。\n- 协调研发、实施和客户，保障项目交付。\n\n明川软件 产品助理 2020.07—2022.02\n- 参与供应链 SaaS 产品设计和客户需求支持。\n- 整理客户反馈，协助版本规划。\n\n技能\nAxure、Figma、SQL、Excel、Jira、ChatGPT\n\n教育背景\n华东理工大学 信息管理与信息系统 本科 2016—2020`,
  extra: '最近用大模型做过一个自然语言问数 Demo，针对销售和库存数据整理了常见问题，但还没有正式上线。WMS 项目上线后库存准确率约从 92% 提升到 98%。经营报表统一了 20 多个指标口径。'
};

const questions = [
  {title:'自然语言问数 Demo 解决了什么具体问题？', hint:'请说明目标用户、原有流程、痛点和为什么选择大模型。', priority:true, placeholder:'例如：业务经理每周需要找数据同学临时取数……', bullet:'针对业务人员查数门槛高、口径易误解的问题，设计基于大模型的自然语言问数方案，覆盖意图识别、指标映射、结果解释与来源追溯。'},
  {title:'你如何验证问数结果是否可靠？', hint:'补充测试问题数量、准确性标准、失败案例与修正方式。', priority:true, placeholder:'例如：梳理了 30 个高频问题，以答案准确率……', bullet:'梳理销售与库存场景 30+ 高频问题，建立准确性、可解释性和响应效率三类评测维度，完成内部 Demo 首轮验证。'},
  {title:'WMS 库存准确率是如何从 92% 提升到 98% 的？', hint:'说明你发现的问题、关键产品动作、数据口径和个人贡献。', priority:true, placeholder:'请描述造成误差的关键环节，以及你设计的机制……', bullet:'重构入库与盘点流程，通过规则校验、异常任务闭环和关键节点数据追踪，将库存准确率从约 92% 提升至 98%。'},
  {title:'经营报表项目中，你统一了哪些指标口径？', hint:'说明指标数量、冲突来源、你的取舍方式及业务影响。', priority:false, placeholder:'例如：销售额、履约率、库存周转等指标原先……', bullet:'从 0 到 1 建设经营数据报表体系，统一销售、库存、履约等 20+ 核心指标口径，支持管理层按日查看经营情况。'},
  {title:'最复杂的一次跨团队协作是什么？', hint:'补充团队规模、主要分歧、解决动作与交付结果。', priority:false, placeholder:'例如：研发、实施、客户三方对需求优先级存在分歧……', bullet:'协同研发、实施及客户业务团队推进多个版本交付，通过需求分级和里程碑管理，将重点项目平均交付周期缩短约 20%。'},
  {title:'你如何做需求优先级判断？', hint:'请提供一次具体取舍，而不是只描述通用方法。', priority:false, placeholder:'例如：综合客户影响、战略价值、研发成本和风险……', bullet:'建立基于客户影响、业务价值、交付成本与风险的需求分级机制，推动核心版本聚焦高价值业务闭环。'},
  {title:'从 ERP / WMS 转向 AI 产品的核心动机是什么？', hint:'用连续的能力积累解释转型，避免只表达对风口的兴趣。', priority:false, placeholder:'例如：在经营报表和流程系统中，我发现……', bullet:'持续探索 AI 对企业软件交互与决策方式的重构，将复杂业务建模与数据产品经验迁移至 AI 场景设计。'}
];

const comparisons = {
  ai: [
    ['WMS 产品优化','负责 WMS 需求分析和版本迭代，跟进上线。','重构入库与盘点流程，通过规则校验、异常任务闭环和关键节点数据追踪，将库存准确率从约 92% 提升至 98%。','补齐产品动作与量化结果','确认 92% 与 98% 的统计口径一致'],
    ['经营数据产品','负责经营数据报表项目，梳理相关指标。','从 0 到 1 建设经营数据报表体系，统一销售、库存、履约等 20+ 核心指标口径，支持管理层按日查看经营情况。','强化复杂数据产品能力','“从 0 到 1”需确认个人负责范围'],
    ['AI 问数实践','使用 ChatGPT，做过自然语言问数 Demo。','针对业务查数门槛高的问题，完成大模型自然语言问数方案设计与内部验证，梳理 30+ 高频问题并建立准确性、可解释性与响应效率评测维度。','建立完整 AI 产品实践闭环','避免写成已正式上线'],
    ['项目推进','协调研发、实施和客户，保障项目交付。','协同研发、实施与客户业务团队推进多个版本交付，通过需求分级和里程碑管理，将重点项目平均交付周期缩短约 20%。','体现方法与项目结果','需要准备周期对比依据']
  ],
  concise: [
    ['WMS 产品优化','负责 WMS 需求分析和版本迭代，跟进上线。','优化 WMS 入库与盘点流程，以规则校验和异常闭环将库存准确率由约 92% 提升至 98%。','压缩过程描述，保留关键结果','确认准确率统计口径'],
    ['经营数据产品','负责经营数据报表项目，梳理相关指标。','从 0 到 1 搭建经营报表，统一 20+ 销售、库存及履约指标口径。','删除非必要背景信息','确认个人主导范围'],
    ['AI 问数实践','使用 ChatGPT，做过自然语言问数 Demo。','设计 AI 问数方案并完成内部验证，覆盖 30+ 高频问题及三类评测维度。','突出最重要的实践证据','明确尚未正式上线'],
    ['项目推进','协调研发、实施和客户，保障项目交付。','以需求分级和里程碑管理协同三方，将重点项目交付周期缩短约 20%。','减少泛化表达','准备周期对比依据']
  ],
  modest: [
    ['WMS 产品优化','负责 WMS 需求分析和版本迭代，跟进上线。','参与优化 WMS 入库与盘点流程，负责规则校验和异常闭环设计；上线后库存准确率由约 92% 提升至 98%。','收窄个人贡献边界','明确数据来自项目统计'],
    ['经营数据产品','负责经营数据报表项目，梳理相关指标。','负责经营报表产品设计，参与统一销售、库存及履约等 20+ 指标口径。','避免无法证明的“从 0 到 1”','补充其他参与角色'],
    ['AI 问数实践','使用 ChatGPT，做过自然语言问数 Demo。','尝试设计自然语言问数 Demo，整理 30+ 高频问题，并完成内部初步验证。','如实体现探索阶段','不使用“落地”与“上线”'],
    ['项目推进','协调研发、实施和客户，保障项目交付。','参与多方项目协同，通过需求分级和里程碑跟进，支持重点项目按计划交付。','去除缺少依据的量化结果','可补充真实周期数据']
  ],
  tob: [
    ['WMS 产品优化','负责 WMS 需求分析和版本迭代，跟进上线。','深入仓储入库、盘点与异常处理流程，设计规则校验和任务闭环机制，将库存准确率从约 92% 提升至 98%。','强化业务流程与方案深度','确认客户侧数据口径'],
    ['经营数据产品','负责经营数据报表项目，梳理相关指标。','面向管理层经营决策场景，从 0 到 1 建设数据报表产品，完成跨部门 20+ 核心指标口径治理。','突出企业级数据治理价值','说明业务部门参与范围'],
    ['AI 问数实践','使用 ChatGPT，做过自然语言问数 Demo。','面向企业经营分析场景设计自然语言问数 Demo，打通业务问题、指标口径与结果溯源的产品链路。','连接 AI 与 ToB 业务价值','明确当前为内部验证'],
    ['项目推进','协调研发、实施和客户，保障项目交付。','协同产品研发、实施顾问与客户关键用户推进版本交付，以需求分级控制定制化范围和实施风险。','体现 ToB 多角色协同能力','准备典型冲突案例']
  ]
};

const interviewQs = [
  ['为什么从 ERP / WMS 转向 AI 产品？','用能力迁移而非追逐风口来回答：复杂业务建模、数据产品和项目落地，正是企业级 AI 应用需要的基本盘。'],
  ['你的 AI 问数 Demo 具体是怎么设计的？','按用户痛点、数据准备、问答链路、结果溯源、评测标准五个部分展开。'],
  ['如何判断一个业务场景是否适合使用大模型？','从任务容错率、数据可得性、传统方案成本、效果可评测性和业务价值评估。'],
  ['如何降低大模型幻觉对企业用户的影响？','说明引用溯源、结构化数据查询、置信度、高风险拒答和人工兜底机制。'],
  ['问数准确率如何定义和测量？','区分意图理解、指标匹配、过滤条件、计算结果和解释完整性。'],
  ['你在 WMS 项目中的个人贡献边界是什么？','明确你负责的问题发现、方案设计、协调推进与结果验证，避免包揽团队成果。'],
  ['讲一次需求优先级冲突的处理经历。','使用 STAR，重点说明信息收集、判断原则、沟通动作和最终结果。'],
  ['经营报表为什么需要统一指标口径？','结合部门口径冲突、决策效率和数据可信度解释产品价值。'],
  ['如果 AI 功能效果达不到预期，你会怎么处理？','先定位数据、Prompt、检索、模型或交互问题，再做离线评测与小流量验证。'],
  ['入职后 90 天你会如何开展工作？','建议分为理解业务与用户、定义场景优先级、验证最小闭环三个阶段。']
];

let state = JSON.parse(localStorage.getItem('resume-expert-state') || '{}');
state.ready = Boolean(state.ready);
state.answers = state.answers || {};
state.tone = state.tone || 'ai';

function saveState(){ localStorage.setItem('resume-expert-state', JSON.stringify(state)); }
function setField(id, value){ const el = $('#' + id); if(el) el.value = value || ''; }
function fillFromState(){ ['role','industry','companyType','stage','strengths','jdInput','resumeInput','extraInput'].forEach(id => setField(id, state[id])); updateCounts(); updateSidebar(); }
function captureForm(){ ['role','industry','companyType','stage','strengths','jdInput','resumeInput','extraInput'].forEach(id => state[id] = $('#' + id).value.trim()); saveState(); updateSidebar(); }
function updateCounts(){ $('#jdCount').textContent = $('#jdInput').value.length; $('#resumeCount').textContent = $('#resumeInput').value.length; }
function updateSidebar(){ $('#sidebarRole').textContent = state.role || '未命名岗位'; $('#sidebarCompany').textContent = state.companyType || '等待输入'; const answered = Object.values(state.answers).filter(v=>v.trim()).length; const progress = state.ready ? Math.min(100, 75 + Math.round(answered / questions.length * 25)) : 0; $('#sidebarProgress').textContent = progress + '%'; $('#globalProgress').style.width = progress + '%'; }

function showToast(message){ $('#toastText').textContent = message; $('#toast').classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(()=>$('#toast').classList.remove('show'), 2200); }
function showView(step){
  if(!state.ready && step !== 'input'){ showToast('请先填写材料并开始分析'); return; }
  $$('.view').forEach(v=>v.classList.toggle('active', v.id === 'view-' + step));
  $$('.step-item').forEach((item,index)=>{ item.classList.toggle('active', item.dataset.step === step); item.classList.toggle('complete', state.ready && index < 8); item.querySelector('.step-state').textContent = state.ready ? '✓' : (index===0?'●':'—'); });
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderQuestions(){
  $('#questionList').innerHTML = questions.map((q,i)=>`<article class="question-card"><div class="question-top"><span class="q-index">${String(i+1).padStart(2,'0')}</span><div class="q-title"><b>${q.title}</b><p>${q.hint}</p></div><span class="q-priority ${q.priority?'':'normal'}">${q.priority?'高优先级':'建议补充'}</span></div><div class="question-body"><textarea data-q="${i}" placeholder="${q.placeholder}">${state.answers[i]||''}</textarea><div class="q-actions"><span>请使用具体事实与可信数据</span><button class="btn btn-secondary generate-one" data-gen="${i}">生成简历表达</button></div><div class="generated-bullet ${state.answers[i]?'show':''}" id="bullet-${i}"><b>可用简历表达</b>${q.bullet}</div></div></article>`).join('');
  updateQuestionStats();
}
function updateQuestionStats(){ const count = Object.values(state.answers).filter(v=>v.trim()).length; $('#answeredCount').textContent = `${count} / ${questions.length}`; $('#questionProgress').style.width = `${count/questions.length*100}%`; updateSidebar(); }

function renderComparisons(tone='ai'){
  const labels={ai:'AI 产品',concise:'简洁表达',modest:'克制表达',tob:'ToB SaaS'};
  state.tone=tone; saveState(); $('#toneStamp').textContent='当前风格：'+labels[tone];
  $$('.tone-btn').forEach(b=>b.classList.toggle('active',b.dataset.tone===tone));
  $('#comparisonList').innerHTML=comparisons[tone].map((c,i)=>`<article class="comparison-item"><div class="comparison-meta"><b>${String(i+1).padStart(2,'0')} · ${c[0]}</b><span>已优化</span></div><div class="compare-grid"><div class="compare-col"><div class="compare-label">修改前</div><p>${c[1]}</p></div><div class="compare-col after"><div class="compare-label">修改后</div><p>${c[2]}</p></div></div><div class="compare-reason"><div><b>修改理由</b>${c[3]}</div><div><b>风险提示</b>${c[4]}</div></div></article>`).join('');
}

function renderQA(){ $('#qaList').innerHTML=interviewQs.map((q,i)=>`<div class="qa-item"><button class="qa-question"><span>Q${i+1}</span><b>${q[0]}</b><i>＋</i></button><div class="qa-answer">回答思路：${q[1]}</div></div>`).join(''); }
function getResumeText(){ return $('#finalResume').innerText.replace(/\n{3,}/g,'\n\n').trim(); }
async function copyText(text,message){ try{ await navigator.clipboard.writeText(text); }catch(e){ const t=document.createElement('textarea');t.value=text;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove(); } showToast(message); }
function openModal(){ $('#modalBackdrop').classList.add('show'); $('#modalBackdrop').setAttribute('aria-hidden','false'); }
function closeModal(){ $('#modalBackdrop').classList.remove('show'); $('#modalBackdrop').setAttribute('aria-hidden','true'); }

$('#sampleBtn').addEventListener('click',()=>{ Object.assign(state,{role:sample.role,industry:sample.industry,companyType:sample.companyType,stage:sample.stage,strengths:sample.strengths,jdInput:sample.jd,resumeInput:sample.resume,extraInput:sample.extra}); fillFromState(); saveState(); showToast('示例数据已填充'); });
['role','industry','companyType','stage','strengths','jdInput','resumeInput','extraInput'].forEach(id=>$('#'+id).addEventListener('input',()=>{captureForm();updateCounts();}));
$('#analyzeBtn').addEventListener('click',()=>{
  captureForm(); if(!state.role||!state.jdInput||!state.resumeInput){ showToast('请先填写目标岗位、JD 和原始简历'); return; }
  const btn=$('#analyzeBtn'); const original=btn.innerHTML; btn.disabled=true; btn.innerHTML='<span class="loading-dots">正在建立岗位画像…</span>';
  setTimeout(()=>{ state.ready=true; saveState(); btn.disabled=false; btn.innerHTML=original; $('#topCopyBtn').disabled=false; updateSidebar(); showToast('分析完成，共发现 4 个关键改进点'); showView('jd'); },1200);
});
$$('.step-item').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.step)));
$$('.next-btn').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.next)));
$('#questionList').addEventListener('input',e=>{ if(e.target.matches('textarea[data-q]')){ state.answers[e.target.dataset.q]=e.target.value; saveState(); updateQuestionStats(); }});
$('#questionList').addEventListener('click',e=>{ const btn=e.target.closest('[data-gen]'); if(!btn)return; const i=btn.dataset.gen; if(!state.answers[i]?.trim()){showToast('先写一点事实，我们才能生成可信表达');return;} $('#bullet-'+i).classList.add('show'); showToast('已生成可用于简历的表达'); });
$('#generateAllBtn').addEventListener('click',()=>{ const answered=Object.values(state.answers).filter(v=>v.trim()).length; if(!answered){showToast('请至少回答一个问题');return;} $$('.generated-bullet').forEach((el,i)=>{if(state.answers[i]?.trim())el.classList.add('show')});showToast(`已生成 ${answered} 条优化表达`); });
$$('.tone-btn').forEach(b=>b.addEventListener('click',()=>{renderComparisons(b.dataset.tone);showToast('表达风格已更新');}));
$('#modestBtn').addEventListener('click',()=>{renderComparisons('modest');showToast('已降低夸张程度');});
$('#qaList').addEventListener('click',e=>{const btn=e.target.closest('.qa-question');if(btn)btn.parentElement.classList.toggle('open');});
$('#copyIntroBtn').addEventListener('click',()=>copyText($('#introText').innerText,'自我介绍已复制'));
['copyResumeBtn','copyResumeBtnSide','topCopyBtn','modalCopyBtn'].forEach(id=>$('#'+id).addEventListener('click',()=>copyText(getResumeText(),'最终简历已复制到剪贴板')));
['exportPlaceholderBtn','showExportBtn'].forEach(id=>$('#'+id).addEventListener('click',openModal));
$('#modalClose').addEventListener('click',closeModal); $('#modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
$('#resetBtn').addEventListener('click',()=>{ if(confirm('确认重置当前项目？所有输入与追问回答将被清除。')){localStorage.removeItem('resume-expert-state');location.reload();} });

renderQuestions(); renderComparisons(state.tone); renderQA(); fillFromState();
$('#topCopyBtn').disabled=!state.ready;
if(!state.ready) $$('.step-item').forEach((b,i)=>b.classList.toggle('locked',i>0));
