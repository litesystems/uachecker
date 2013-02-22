var UAChecker = function(_ua) {
    if(typeof _ua === 'undefined') _ua = window.navigator.userAgent;
    this.UA = _ua;
};

UAChecker.prototype = {
    isiOS: function() {
               if (this.UA.indexOf('iPhone', 0) != -1) {
                   return true;
               } else if (this.UA.indexOf('iPod', 0) != -1) {
                   return true;
               } else if (this.UA.indexOf('iPad', 0) != -1) {
                   return true;
               }
               return false;
    },
    isAndroid: function() {
                   if (this.UA.indexOf('Android', 0) != -1) {
                       return true;
                   }
                   return false;
    },
    isBlackBerry: function() {
                      if (this.UA.indexOf('BlackBerry', 0) != -1) {
                          return true;
                      }
                      return false;
    },
    isWindowsPhone: function() {
                        if (this.UA.indexOf('Windows Phone', 0) != -1) {
                            return true;
                        }
                        return false;
    },
    isWindowsMobile: function() {
                         if (this.UA.indexOf('Windows CE', 0) != -1) {
                             return true;
                         } else if (this.UA.indexOf('IEMobile', 0) != -1) {
                             return true;
                         }
                         return false;
    },
    isSmartPhone: function() {
                      if (this.isiOS()) {
                          if (this.UA.indexOf('iPad', 0) != -1) {
                              return false;
                          } else {
                              return true;
                          }
                      } else if (this.isAndroid) {
                          if (this.UA.indexOf('Mobile', 0) != -1) {
                              return true;
                          } else {
                              return false;
                          }
                      }
                      return (this.isBlackBerry() || this.isWindowsPhone() || this.isWindowsMobile());
    },
};

