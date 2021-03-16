/**
 * 支付宝积分 autojs
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

click(970, 2250) // 点击我的图标
sleep(2000)
click(800, 520) // 点击支付宝会员
sleep(2000)
click(380, 750) // 点击每日赚积分
sleep(2000)
click(800, 1175) // 点击逛15秒赚积分
toast('15秒后返回')
sleep(5000)
toast('10秒后返回')
sleep(5000)
toast('5秒后返回')
sleep(6000)
back()
sleep(1000)

const points = [[130, 1070], [250, 1070], [380, 1070], [550, 1070], [700, 1070], [830, 1070], [960, 1070]]
let i = 0
while (i < points.length) {
  click(points[i][0], points[i][1])
  sleep(400)
  i++
}

// 返回到 Auto.js
back() // 返回上一层
sleep(1000)
click(110, 2250) // 点击每日赚积分
sleep(1000)
back() // 返回上一层
exit()
