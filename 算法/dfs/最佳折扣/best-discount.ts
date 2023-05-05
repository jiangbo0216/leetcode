/*
## 题目描述

模拟商场优惠打折，有三种[优惠券](https://so.csdn.net/so/search?q=%E4%BC%98%E6%83%A0%E5%88%B8&spm=1001.2101.3001.7020)可以用，满减券、打折券和无门槛券。

满减券：满100减10，满200减20，满300减30，满400减40，以此类推不限制使用；

打折券：固定折扣92折，且打折之后[向下取整](https://so.csdn.net/so/search?q=%E5%90%91%E4%B8%8B%E5%8F%96%E6%95%B4&spm=1001.2101.3001.7020)，每次购物只能用1次；

无门槛券：一张券减5元，没有使用限制。

每个人结账使用优惠券时有以下限制：

每人每次只能用两种优惠券，并且同一种优惠券必须一次用完，不能跟别的穿插使用（比如用一张满减，再用一张打折，再用一张满减，这种顺序不行）。

求不同使用顺序下每个人用完券之后得到的最低价格和对应使用优惠券的总数；如果两种顺序得到的价格一样低，就取使用优惠券数量较少的那个。

## 输入描述

第一行三个数字m,n,k，分别表示每个人可以使用的满减券、打折券和无门槛券的数量;

第二行一个数字x, 表示有几个人购物;

后面x行数字，依次表示是这几个人打折之前的商品总价。

## 输出描述

输出每个人使用券之后的最低价格和对应使用优惠券的数量

### 示例1

输入

第一行三个数字m,n,k，分别表示每个人可以使用的满减券、打折券和无门槛券的数量。

3 2 5

3

100

200

400

输出

65 6

135 8

275 8

### 说明

第一个人使用 1 张满减券和5张无门槛券价格最低。（100-10=90, 90-5\*5=65）

第二个人使用 3 张满减券和5张无门槛券价格最低。（200-20-10-10=160, 160 – 5\*5 = 135）

第三个人使用 3 张满减券和5张无门槛券价格最低。（400-40-30-30=300, 300 – 5\*5=275）
*/

export function bestDiscount(coupon: number[], totalPrices: number[]) {
  // 先判断是先打折还是满减

  function cut (couponNum: number, price: number) {
    let usedCouponNum = 0
    while (couponNum > 0) {
      if (price >= 400) {
        price -= 40
      } else if (price >= 300) {
        price -= 30
      } else if (price >= 200) {
        price -= 20
      } else if (price >= 100) {
        price -= 10
      } else {
        break
      }
      couponNum--
      usedCouponNum++
    }
    return [usedCouponNum, price]
  }

  function cutWithout (couponNum: number, price: number) {
    return [couponNum, price - couponNum * 5]
  }

  function sale (couponNum: number, price: number) {
    return [couponNum > 0 ? 1 : 0, ~~(price * 0.92)]
  }

  let result = []
  for (const totalPrice of totalPrices) {
    let finalPrice = 0
    let finalUsedCoupon = 0
    let priceByCut = cut(coupon[0], totalPrice)
    let priceBySale = sale(coupon[1], totalPrice)
    let priceByCutWithout = [0, 0]

    // function (params:type) {
      
    // }
  
    // 这里写的太冗长了，😄
    if (priceByCut[1] > priceBySale[1]) {
      finalUsedCoupon = priceBySale[0]
      finalPrice = priceBySale[1]
      priceByCut =  cut(coupon[0], finalPrice)
      priceByCutWithout = cutWithout(coupon[2], finalPrice)
      
      if (priceByCut[1] > priceByCutWithout[1]) {
        finalUsedCoupon += priceByCutWithout[0]
        finalPrice = priceByCutWithout[1]
      } else if (priceByCut[1] < priceByCutWithout[1]) {
        finalUsedCoupon += priceByCut[0]
        finalPrice = priceByCut[1]
      } else {
        finalUsedCoupon += priceByCut[0] > priceByCutWithout[0] ? priceByCutWithout[0] : priceByCut[0]
        finalPrice = priceByCut[1]
      }
    } else if (priceByCut[1] < priceBySale[1]){
      finalUsedCoupon = priceByCut[0]
      finalPrice = priceByCut[1]

      priceBySale =  sale(coupon[1], finalPrice)
      priceByCutWithout = cutWithout(coupon[2], finalPrice)
      
      if (priceBySale[1] > priceByCutWithout[1]) {
        finalUsedCoupon += priceByCutWithout[0]
        finalPrice = priceByCutWithout[1]
      } else if (priceBySale[1] < priceByCutWithout[1]) {
        finalUsedCoupon += priceBySale[0]
        finalPrice = priceBySale[1]
      } else {
        finalUsedCoupon += priceBySale[0] > priceByCutWithout[0] ? priceByCutWithout[0] : priceBySale[0]
        finalPrice = priceBySale[1]
      }
    } else {
      finalPrice = priceByCut[1]
      if (priceByCut[0] === priceBySale[0]) {
        finalUsedCoupon = priceBySale[0]

        priceBySale =  sale(coupon[1], finalPrice)
        priceByCutWithout = cutWithout(coupon[2], finalPrice)
        priceByCut = cut(coupon[0], finalPrice)
        
        if (priceByCut[1] > priceByCutWithout[1]) {
          finalUsedCoupon += priceByCutWithout[0]
          finalPrice = priceByCutWithout[1]

        } else if (priceByCut[1] < priceByCutWithout[1]) {

            finalUsedCoupon += priceByCut[0]
            finalPrice = priceByCut[1]
        } else {
          finalUsedCoupon += priceByCut[0] > priceByCutWithout[0] ? priceByCutWithout[0] : priceByCut[0]
          finalPrice = priceBySale[1]
        }

        if (priceByCut[1] > priceByCutWithout[1]) {
          finalUsedCoupon += priceByCutWithout[0]
          finalPrice = priceByCutWithout[1]
        } else if (priceByCut[1] < priceByCutWithout[1]) {
          finalUsedCoupon += priceByCut[0]
          finalPrice = priceByCut[1]
        } else {
          finalUsedCoupon += priceByCut[0] > priceByCutWithout[0] ? priceByCutWithout[0] : priceByCut[0]
          finalPrice = priceByCut[1]
        }
      } else {
        if (priceByCut[0] > priceBySale[0]) {
          priceByCut =  cut(coupon[0], finalPrice)
          priceByCutWithout = cutWithout(coupon[2], finalPrice)
          
          if (priceByCut[1] > priceByCutWithout[1]) {
            finalUsedCoupon += priceByCutWithout[0]
            finalPrice = priceByCutWithout[1]
          } else if (priceByCut[1] < priceByCutWithout[1]) {
            finalUsedCoupon += priceByCut[0]
            finalPrice = priceByCut[1]
          } else {
            finalUsedCoupon += priceByCut[0] > priceByCutWithout[0] ? priceByCutWithout[0] : priceByCut[0]
            finalPrice = priceByCut[1]
          }
        } else {
          priceBySale =  sale(coupon[1], finalPrice)
          priceByCutWithout = cutWithout(coupon[2], finalPrice)
          
          if (priceBySale[1] > priceByCutWithout[1]) {
            finalUsedCoupon += priceByCutWithout[0]
            finalPrice = priceByCutWithout[1]
          } else if (priceBySale[1] < priceByCutWithout[1]) {
            finalUsedCoupon += priceBySale[0]
            finalPrice = priceBySale[1]
          } else {
            finalUsedCoupon += priceBySale[0] > priceByCutWithout[0] ? priceByCutWithout[0] : priceBySale[0]
            finalPrice = priceBySale[1]
          }
        }
      }


    }


    result.push([finalPrice, finalUsedCoupon])
  }
  return result
}