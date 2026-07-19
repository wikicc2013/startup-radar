/* 融资金额的保守美元解析：只为排序/聚合服务，原文始终保留用于展示。 */
function parseUsd(raw) {
  if (!raw) return 0;
  let text = String(raw).split(/[（(]/)[0].replace(/,/g, '').replace(/\s/g, '');
  if (!/\d/.test(text) || /未披露|同上轮/.test(text)) return 0;

  // 没有汇率日期时不把非美元货币硬当美元。
  if (/CHF|EUR|GBP|CNY|RMB|AUD|CAD|SGD|INR|BRL|MXN|€|£|¥|人民币|澳元|加元|新元/i.test(text)) return 0;

  let match;
  if (match = text.match(/([\d.]+)(?:B|billion)\b/i)) return Number(match[1]) * 1e9;
  if (match = text.match(/([\d.]+)亿(?:美元)?/)) return Number(match[1]) * 1e8;
  if (match = text.match(/([\d.]+)(?:M|million|百万(?:美元)?)/i)) return Number(match[1]) * 1e6;
  if (match = text.match(/([\d.]+)(?:K|thousand)/i)) return Number(match[1]) * 1e3;
  if (match = text.match(/([\d.]+)万(?:美元)?/)) return Number(match[1]) * 1e4;
  if (match = text.match(/(?:US)?\$([\d.]+)/i)) return Number(match[1]);
  if (match = text.match(/([\d.]+)美元/)) return Number(match[1]);
  if (match = text.match(/^(?:约|超过|超|至少|累计)?([\d.]+)(?:美元)?(?:以上)?$/)) return Number(match[1]);
  return 0;
}

module.exports = { parseUsd };
