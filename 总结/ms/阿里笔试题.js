let obj = {
  key_1: 1,
  key_2: 2
}

function objWatcher(key) {
  console.log(key + '的值发生改变：', this[key])
}

bindData(obj, objWatcher)

obj.key_1 = 2
obj.key_2 = 1


function bindData(obj, objWatcher) {
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      Object.defineProperty(obj, key, {
        get: function () {
          let copyKey = '_' + key;
          return this[copyKey]
        },
        set: function (val) {
          let copyKey = '_' + key;
          this[copyKey] = val;
          objWatcher.call(this, key)
        }
      })
    }
  } else {
    console.log('must be Object')
  }
}