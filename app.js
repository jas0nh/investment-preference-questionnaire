const dimensions = {
  value: { name: "价值倾向", shortName: "价值" },
  growth: { name: "成长倾向", shortName: "成长" },
  momentum: { name: "动量倾向", shortName: "动量" },
  systematic: { name: "量化/系统化倾向", shortName: "系统化" },
  risk: { name: "风险偏好", shortName: "风险" },
  horizon: { name: "交易频率/期限偏好", shortName: "期限" },
};

const questions = [
  {
    text: "我在选择股票或基金时，会重点关注估值、盈利质量和财务基本面。",
    dimension: "value",
  },
  {
    text: "与短期价格波动相比，我更重视安全边际和买入价格是否合理。",
    dimension: "value",
  },
  {
    text: "做出投资决定前，我愿意花时间阅读财报、公告或行业资料。",
    dimension: "value",
  },
  {
    text: "我偏好投资行业前景广阔、未来增长潜力大的公司。",
    dimension: "growth",
  },
  {
    text: "即使当前估值偏高，只要增长前景优秀，我也愿意考虑买入。",
    dimension: "growth",
  },
  {
    text: "我对科技、医药、先进制造等新兴行业中的快速成长机会兴趣很大。",
    dimension: "growth",
  },
  {
    text: "当一项资产上涨并形成趋势时，我倾向于跟进观察或买入。",
    dimension: "momentum",
  },
  {
    text: "近期表现强劲的资产会明显提高我的关注度。",
    dimension: "momentum",
  },
  {
    text: "面对市场短期波动，我会快速反应并调整持仓。",
    dimension: "momentum",
  },
  {
    text: "我更倾向于依靠数据、模型或规则来指导交易决策。",
    dimension: "systematic",
  },
  {
    text: "相比凭直觉下单，我更喜欢使用程序化或清单式的交易策略。",
    dimension: "systematic",
  },
  {
    text: "交易时我会遵循事先制定的系统规则，不轻易临场改变计划。",
    dimension: "systematic",
  },
  {
    text: "为了追求更高收益，我可以接受较大的阶段性亏损风险。",
    dimension: "risk",
  },
  {
    text: "即使投资出现亏损，我也能保持平常心，不会轻易恐慌抛售。",
    dimension: "risk",
  },
  {
    text: "对我来说，资金安全性比高收益更重要。",
    dimension: "risk",
    reverse: true,
  },
  {
    text: "面对资产大幅波动，我通常会立即平仓或明显减仓。",
    dimension: "risk",
    reverse: true,
  },
  {
    text: "我通常愿意持有一项投资超过一年，再评估是否卖出。",
    dimension: "horizon",
  },
  {
    text: "我更重视长期资产配置，而不是频繁捕捉短期机会。",
    dimension: "horizon",
  },
  {
    text: "我习惯频繁交易，经常进行短线买卖。",
    dimension: "horizon",
    reverse: true,
  },
  {
    text: "如果市场短期没有明显机会，我也能耐心等待。",
    dimension: "horizon",
  },
];

const profiles = [
  {
    key: "value",
    title: "价值型投资者",
    summary: "你更倾向于用基本面、估值和安全边际来判断投资机会。",
    insight:
      "这种画像通常偏好理性分析、低频决策和较充分的研究准备。优势是更容易避开情绪化追涨杀跌，挑战是可能错过部分高增长或强趋势机会。",
    advice:
      "保持估值纪律，同时给研究框架加入复盘机制，记录买入理由、卖出条件和关键风险，避免只因价格便宜而忽视基本面恶化。",
  },
  {
    key: "growth",
    title: "成长进取型投资者",
    summary: "你更关注未来空间、行业景气和企业增长潜力。",
    insight:
      "这种画像通常愿意为了长期弹性接受更高波动。优势是能捕捉结构性机会，挑战是容易低估估值消化和预期落空带来的回撤。",
    advice:
      "给成长假设设置可验证指标，例如收入增速、利润率、竞争格局或产品进展，并用仓位上限控制单一高波动资产的影响。",
  },
  {
    key: "momentum",
    title: "动量交易型投资者",
    summary: "你对趋势、价格强弱和市场短期反馈更敏感。",
    insight:
      "这种画像通常行动快、关注市场变化，适合规则明确的趋势跟随框架。挑战是交易频率较高时，成本、滑点和情绪波动会显著影响结果。",
    advice:
      "提前写清入场、止损、止盈和复盘规则，避免在连续上涨后扩大风险暴露，也避免在短期回撤中反复改变交易计划。",
  },
  {
    key: "systematic",
    title: "系统化纪律型投资者",
    summary: "你偏好用数据、模型、规则和流程降低主观干扰。",
    insight:
      "这种画像重视一致性和可复盘性，适合清单化投资、量化筛选或策略组合。挑战是模型假设失效时，可能过度依赖历史数据。",
    advice:
      "为每套规则设定适用条件和停用条件，定期检查样本外表现、极端行情表现和交易成本，避免把规则当成确定性结论。",
  },
  {
    key: "risk",
    title: "风险进取型投资者",
    summary: "你对波动和亏损的承受度相对较高，更愿意追求收益弹性。",
    insight:
      "这种画像在机会判断正确时可能获得较高收益，但也更需要风险预算。挑战是高承受度容易被误用为高仓位或高杠杆。",
    advice:
      "先定义最大可承受回撤、单笔亏损上限和资金分层，再决定风险资产比例。风险承受能力不等于必须承担更高风险。",
  },
  {
    key: "horizon",
    title: "长期配置型投资者",
    summary: "你更偏好长期持有、低频调整和耐心等待。",
    insight:
      "这种画像通常适合用资产配置和长期复利框架管理组合。优势是交易噪音较少，挑战是需要持续检查长期假设是否仍成立。",
    advice:
      "建立定期再平衡和年度复盘机制，关注目标、期限和风险承受能力是否变化，而不是只根据短期涨跌调整组合。",
  },
];

const answers = new Array(questions.length).fill(null);
let currentIndex = 0;

const dimensionList = document.querySelector("#dimensionList");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const questionGroup = document.querySelector("#questionGroup");
const questionIndex = document.querySelector("#questionIndex");
const questionText = document.querySelector("#questionText");
const scaleOptions = document.querySelector("#scaleOptions");
const questionHint = document.querySelector("#questionHint");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const questionnaire = document.querySelector("#questionnaire");
const resultPanel = document.querySelector("#resultPanel");
const profileTitle = document.querySelector("#profileTitle");
const profileSummary = document.querySelector("#profileSummary");
const profileInsight = document.querySelector("#profileInsight");
const profileAdvice = document.querySelector("#profileAdvice");
const scoreList = document.querySelector("#scoreList");
const restartButton = document.querySelector("#restartButton");

function renderDimensionList() {
  const counts = getDimensionCounts();

  dimensionList.innerHTML = Object.entries(dimensions)
    .map(([key, dimension]) => {
      const answered = questions.filter(
        (question, index) => question.dimension === key && answers[index] !== null,
      ).length;
      return `
        <li class="dimension-item" data-dimension="${key}">
          <span>${dimension.name}</span>
          <span>${answered}/${counts[key]}</span>
        </li>
      `;
    })
    .join("");
}

function getDimensionCounts() {
  return questions.reduce((counts, question) => {
    counts[question.dimension] = (counts[question.dimension] || 0) + 1;
    return counts;
  }, {});
}

function renderQuestion() {
  const question = questions[currentIndex];
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  progressText.textContent = `${answeredCount} / ${questions.length}`;
  progressBar.style.width = `${progress}%`;
  questionGroup.textContent = dimensions[question.dimension].name;
  questionIndex.textContent = `第 ${currentIndex + 1} 题 / 共 ${questions.length} 题`;
  questionText.textContent = question.text;
  questionHint.textContent = "";
  prevButton.disabled = currentIndex === 0;
  nextButton.textContent = currentIndex === questions.length - 1 ? "查看结果" : "下一题";

  scaleOptions.innerHTML = [1, 2, 3, 4, 5]
    .map(
      (value) => `
        <label class="scale-option">
          <input type="radio" name="answer" value="${value}" ${answers[currentIndex] === value ? "checked" : ""}>
          <span>${value}</span>
        </label>
      `,
    )
    .join("");

  scaleOptions.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", (event) => {
      answers[currentIndex] = Number(event.target.value);
      renderDimensionList();
      renderQuestion();
    });
  });

  renderDimensionList();
  highlightActiveDimension();
}

function highlightActiveDimension() {
  const activeDimension = questions[currentIndex].dimension;
  dimensionList.querySelectorAll(".dimension-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.dimension === activeDimension);
  });
}

function goToNext() {
  if (answers[currentIndex] === null) {
    const remaining = answers.filter((answer) => answer === null).length;
    questionHint.textContent = `请选择本题答案。当前还有 ${remaining} 题未完成。`;
    return;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }

  const missing = answers.filter((answer) => answer === null).length;
  if (missing > 0) {
    questionHint.textContent = `还有 ${missing} 题未完成，请补全后查看结果。`;
    return;
  }

  showResult();
}

function goToPrevious() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
}

function calculateScores() {
  const totals = Object.keys(dimensions).reduce((accumulator, key) => {
    accumulator[key] = { total: 0, count: 0 };
    return accumulator;
  }, {});

  questions.forEach((question, index) => {
    const rawAnswer = answers[index];
    const score = question.reverse ? 6 - rawAnswer : rawAnswer;
    totals[question.dimension].total += score;
    totals[question.dimension].count += 1;
  });

  return Object.entries(totals).reduce((result, [key, value]) => {
    const average = value.total / value.count;
    result[key] = Math.round(((average - 1) / 4) * 100);
    return result;
  }, {});
}

function chooseProfile(scores) {
  const topKey = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const baseProfile = profiles.find((profile) => profile.key === topKey);
  const titleParts = [baseProfile.title];

  if (scores.risk >= 70 && scores.horizon <= 45) {
    titleParts.push("短线进取特征明显");
  } else if (scores.risk >= 70) {
    titleParts.push("进取特征明显");
  } else if (scores.horizon >= 70 && scores.momentum <= 55) {
    titleParts.push("长线/低频特征明显");
  } else if (scores.risk <= 35) {
    titleParts.push("稳健防守特征明显");
  }

  return {
    ...baseProfile,
    title: titleParts.join(" · "),
  };
}

function showResult() {
  const scores = calculateScores();
  const profile = chooseProfile(scores);

  questionnaire.classList.add("hidden");
  resultPanel.classList.remove("hidden");
  profileTitle.textContent = profile.title;
  profileSummary.textContent = profile.summary;
  profileInsight.textContent = profile.insight;
  profileAdvice.textContent = profile.advice;
  progressText.textContent = `${questions.length} / ${questions.length}`;
  progressBar.style.width = "100%";

  scoreList.innerHTML = Object.entries(dimensions)
    .map(([key, dimension]) => {
      const score = scores[key];
      return `
        <div class="score-row">
          <strong>${dimension.shortName}</strong>
          <div class="score-track" aria-hidden="true">
            <div class="score-fill" data-score="${score}"></div>
          </div>
          <span>${score}</span>
        </div>
      `;
    })
    .join("");

  requestAnimationFrame(() => {
    scoreList.querySelectorAll(".score-fill").forEach((fill) => {
      fill.style.width = `${fill.dataset.score}%`;
    });
  });
}

function restart() {
  answers.fill(null);
  currentIndex = 0;
  resultPanel.classList.add("hidden");
  questionnaire.classList.remove("hidden");
  renderQuestion();
}

prevButton.addEventListener("click", goToPrevious);
nextButton.addEventListener("click", goToNext);
restartButton.addEventListener("click", restart);

renderDimensionList();
renderQuestion();
