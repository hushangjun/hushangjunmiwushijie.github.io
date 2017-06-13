;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-danxuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 65.983389c-245.919634 0-446.016611 200.095256-446.016611 446.016611 0 245.952318 200.064292 446.016611 446.016611 446.016611S958.016611 757.952318 958.016611 512C958.016611 266.080366 757.952318 65.983389 512 65.983389zM512 894.016611c-210.655557 0-382.016611-171.392017-382.016611-382.016611 0-210.655557 171.359333-382.016611 382.016611-382.016611 210.624593 0 382.016611 171.359333 382.016611 382.016611C894.016611 722.624593 722.624593 894.016611 512 894.016611z"  ></path>' +
    '' +
    '<path d="M512 352.00086c-88.223841 0-160.00086 71.775299-160.00086 159.99914s71.775299 160.00086 160.00086 160.00086 160.00086-71.775299 160.00086-160.00086S600.223841 352.00086 512 352.00086z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-rili" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M956.85474 839.600223V245.164722c0-65.448618-53.200666-118.755708-118.828362-118.755707h-59.445904V79.237669c0-6.723122-5.64251-12.254092-12.603039-12.254092h-34.219359c-7.118118 0-12.602016 5.485945-12.602016 12.254092v47.171346h-415.973969V79.237669c0-6.723122-5.64251-12.254092-12.602016-12.254092h-34.220383c-7.118118 0-12.602016 5.485945-12.602016 12.254092v47.171346H184.311773c-65.738213 0-118.828362 53.168943-118.828363 118.755707v594.434478c0 65.448618 53.200666 118.755708 118.828363 118.755707h653.715628c65.73719 0.001023 118.827339-53.16792 118.827339-118.754684zM124.907824 245.164722c0-32.806173 26.523073-59.331293 59.402925-59.331293h59.445904v47.171346c0 6.723122 5.64251 12.254092 12.602016 12.254091h34.220382c7.118118 0 12.602016-5.485945 12.602016-12.254091v-47.171346h415.972947v47.171346c0 6.723122 5.64251 12.254092 12.602015 12.254091h34.21936c7.119141 0 12.603039-5.485945 12.603039-12.254091v-47.171346h59.445904c32.757055 0 59.402925 26.65201 59.402924 59.331293v59.518559H124.907824v-59.518559z m713.118554 653.765771H184.310749c-32.757055 0-59.402925-26.65201-59.402925-59.331293V364.107695h772.521479v475.491505c0 32.807197-26.523073 59.331293-59.402925 59.331293z"  ></path>' +
    '' +
    '<path d="M481.444077 813.546847h61.398372v-343.830882h-45.680389c-1.964748 10.483772-6.14086 19.325138-12.526291 26.524096-6.385431 7.206122-14.083763 13.101389-23.085788 17.682731-9.010211 4.589528-19.079544 7.858992-30.207999 9.82374-11.135618 1.964748-22.594601 2.947122-34.383088 2.947122v44.205804h84.48416v242.647389z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caigou-xianxing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M821.6 256l-78.4 256H342.4L272 256h549.6M216 64H64v64h104.8l18.4 64 100 361.6c1.6 4.8 4 8.8 7.2 12l-52 83.2c-6.4 5.6-10.4 14.4-10.4 23.2 0 17.6 14.4 32 32 32h568v-64H323.2l40-64H768c13.6 0 24.8-8.8 29.6-22.4l97.6-318.4c6.4-20.8-8-43.2-29.6-43.2H252.8l-18.4-64L216 64z"  ></path>' +
    '' +
    '<path d="M320 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path>' +
    '' +
    '<path d="M768 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-xianxing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M384 128c140.8 0 256 115.2 256 256S524.8 640 384 640 128 524.8 128 384s115.2-256 256-256m0-64C207.2 64 64 207.2 64 384s143.2 320 320 320 320-143.2 320-320S560.8 64 384 64z m294.4 569.6l-45.6 45.6 272 272 45.6-45.6-272-272z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cuowuguanbiquxiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiayiyeqianjinchakangengduo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M658.56 557.392L322.536 221.384l45.248-45.256 336.016 336.008z"  ></path>' +
    '' +
    '<path d="M704.088 512.2L364.12 852.16l-45.256-45.248 339.976-339.976z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxiazhankai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M806.4 319.2L512 613.6 221.6 323.2 176 368l290.4 290.4L512 704l45.6-45.6 294.4-294.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhixiangzuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 544H250.4l242.4 242.4L448 832 173.6 557.6 128 512l45.6-45.6L448 192l45.6 45.6L250.4 480H896v64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhixiangyou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 480h645.6L530.4 237.6 576 192l274.4 274.4L896 512l-45.6 45.6L576 832l-45.6-45.6L773.6 544H128v-64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangshangshouqi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M852 660L557.6 365.6 512 320l-45.6 45.6L176 656l45.6 44.8L512 410.4l294.4 294.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-biaotou-zhengxu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M256 640l256-256 256 256z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-biaotou-kepaixu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M256 448l256-256 256 256zM256 576l256 256 256-256z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-biaotou-daoxu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M256 384l256 256 256-256z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)