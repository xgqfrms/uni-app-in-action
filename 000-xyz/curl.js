// 企业微信， jira robot

const wxRobot = () => {
  const url = `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=555a887d-c247-4808-a850-22440c5b25a0`;
  const fetchPOST = (url, obj) => {
    return fetch(
        url,
        {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        },
    )
    .then(res => res.json())
    .then(
        (json) => {
            return json;
        }
    ).catch(err => console.log(`fetch error`, err));
  };
  // loop
  const trs = [...document.querySelector('[class="issue-table"]')?.lastElementChild?.children] ?? [];
  for (const tr of trs) {
    const link = tr?.firstElementChild?.firstElementChild ?? '';
    const text = tr?.firstElementChild?.firstElementChild?.dataset?.issueKey ?? '';
    const obj = {
      msgtype: "markdown",
      markdown: {
        content: `
> 分配给我的问题:\n
[${text}](${link})\n
        `,
      },
    };
    if(text && link) {
      fetchPOST(url, obj);
    }
  }
}

// 半小时
const timer = 1000 * 60 * 30
setInterval(() => {
  wxRobot();
}, timer);
