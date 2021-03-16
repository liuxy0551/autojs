/**
 * 蚂蚁森林 autojs
 * @author liuxy0551@qq.com
 * https://github.com/liuxy0551/autojs
 */
// 多线程监听按键事件 - 需要放在其他执行代码前面
threads.start(function () {
  //启用按键监听
  events.observeKey()
  events.onKeyDown('volume_up', event => {
    toast('按了音量上键，程序已终止')
    exit()
  })
})

launchApp('支付宝') // 打开应用
sleep(2000) // 等待应用启动
click(340, 725) // 点击支付宝首页的蚂蚁森林图标

// 点击能量球、找能量
const num = 10 // 收取的人数
const balls = [[220, 760], [340, 660], [480, 610], [600, 620], [740, 660], [870, 740]] // 六个能量球的位置
let i = 0
while (i < num) {
  sleep(2500) // 等待页面打开
  let j = 0
  while (j < balls.length) {
    click(balls[j][0], balls[j][1])
    sleep(400)
    j++
  }
  i++
  click(950, 1570) // 点击找能量按钮
}

// 返回到 Auto.js
back() // 返回上一层
sleep(1500)
back() // 返回上一层
sleep(1500)
back() // 返回上一层
exit()
 