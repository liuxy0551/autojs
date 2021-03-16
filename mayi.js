/**
 * 蚂蚁森林 autojs
 * @author liuxy0551@qq.com
 * https://github.com/liuxy0551/autojs
 */
launchApp('支付宝') // 打开应用
sleep(2000) // 等待应用启动
click(340, 725) // 点击支付宝首页的蚂蚁森林图标

// 点击能量球、找能量
!function () {
  const num = 3 // 收取的人数
  const balls = [[220, 760], [340, 660], [480, 610], [600, 620], [740, 660], [870, 740]] // 六个能量球的位置
  for (let i = 0; i < num; i++) {
    sleep(2500) // 等待页面打开
    for (let i of balls) {
      click(i[0], i[1])
      sleep(200)
    }
    click(950, 1570)
  }
  exit()
}()
