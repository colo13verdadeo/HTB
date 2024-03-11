Java.perform(function() {
  console.log("iniciando..")
  const strings = Java.use("java.lang.String");
  const arraylist = Java.use("java.util.ArrayList");
  const MainActivity = Java.use("com.example.supermarket.MainActivity")
  const SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec")
  const Cipher = Java.use("javax.crypto.Cipher")
  const Base64 = Java.use("android.util.Base64")
  const tezc = Java.use('java.lang.Object')
  const MainActivity$a = Java.use("com.example.supermarket.MainActivity$a");
  let e = Java.use("com.example.supermarket.MainActivity$e");

  //CIPHER
  var cipherDoFinal_1 = Cipher.doFinal.overload();
  var cipherDoFinal_3 = Cipher.doFinal.overload('[B', 'int');
  var cipherDoFinal_4 = Cipher.doFinal.overload('[B', 'int', 'int');
  var cipherDoFinal_5 = Cipher.doFinal.overload('[B', 'int', 'int', '[B');
  var cipherDoFinal_6 = Cipher.doFinal.overload('[B', 'int', 'int', '[B', 'int');


  cipherDoFinal_1.implementation = function ()
  {
    console.log('Entra en dofinal1')
    return cipherDoFinal_1()
  }
  Cipher.doFinal.overload('[B').implementation = function (v1)
  {
    console.log('Entra en dofinal2')
    var ret = this.doFinal(v1)
    console.log('Retorna :', strings.$new(ret))
    return ret
  }
  cipherDoFinal_3.implementation = function (v1, v2)
  {
    console.log('Entra en dofinal3')
    return cipherDoFinal_3(v1, v2)
  }
  Base64.decode.overload('java.lang.String', 'int').implementation = function (v1, v2)
  {
    console.log('Entra en decode: ', v1)
    var ret = this.decode(v1, v2)
    console.log('Retorna: ', ret)
    return ret
  }
  Cipher.getInstance.overload('java.lang.String').implementation = function (v1)
  {
    console.log('Entra en Cipher: ', v1)
    var ret = this.getInstance(v1)
    console.log('Retorna: ', ret)
    return ret
  }
// e["getItemId"].implementation = function (i2) {
//     console.log('getItemId is called' + ', ' + 'i2: ' + i2);
//     let ret = this.getItemId(i2);
//     console.log('getItemId ret value is ' + ret);
//     return ret;
// };
  
//Funciones
function readaddrs(str) {
  console.log(`
  CString:  ${str.readCString()}
  Int:      ${str.readInt()}
  UInt:     ${str.readUInt()}
  Long:     ${str.readLong()}
  Patron:   ${str.toMatchPattern()}
  `)
}

Java.choose("com.example.supermarket.MainActivity", 
  {
    onMatch: function (v1)
    {
      if(v1._s.value == 45.0)
      {
        v1._s.value = 50.0
        return
      }
      console.log("Valor: ", v1._s.value)
      v1._s.value = 45.0
      v1.r.value = 2.5
      console.log(v1.w.value)
      console.log(v1.stringFromJNI())
      console.log(v1.stringFromJNI2())
      console.log(v1.stringFromJNI3())


      var tienda = ["Whole wheat bread\n2.50$", "Pita pockets\n2.50$", "English muffins\n2.50$", "Whole-grain flour tortillas\n2.50$", "Skinless chicken breasts\n2.50$", "Ground turkey\n2.50$", "Salmon\n2.50$", "Brown rice\n2.50$", "Tomato sauce\n2.50$", "Mustard\n2.50$", "Barbecue sauce\n2.50$", "Red-wine vinegar\n2.50$", "Salsa\n2.50$", "Extra virgin olive oil\n2.50$", "Hot pepper sauce\n2.50$", "Tuna packed in water\n2.50$", "Frozen shrimp\n2.50$", "Garbanzo beans\n2.50$", "Broccoli\n2.50$", "Spinach\n2.50$", "Carrots\n2.50$", "Whole-grain waffles\n2.50$", "Whole-grain vegetable pizza\n2.50$"] 
      v1.w.value = arraylist.$new()
      tienda.forEach(element => {
        v1.w.value.add(element)
      });
      console.log(v1.c.value)
      Java.scheduleOnMainThread(function ()
      {
        console.log("Pasa")
        v1.s()
      })
    },
    onComplete : function(){}
  })

  MainActivity$a["onClick"].implementation = function (view) {
    console.log('onClick entra: ' + view);
    // var tes = MainActivity._s.value
    // console.log("Esteando una call: ", tes)
    let ret = this.onClick(view);
    console.log('onClick retorna: ' + ret);
    return ret;
};
//NUNCA ENTRA, VER PORQUE.
  MainActivity.onCreate.implementation = function (v1)
  {
    console.log("entra en onCreate")
    console.log('Ok')
    var ret = this.onCreate(v1)
    console.log('Sale: ', ret)
  }
// HTB{n0_fo0d_w1th0ut_BbQ_S@uc3!}
  
  //pruebas

/*
  const JNI3Function = Module.findExportByName("libsupermarket.so", "Java_com_example_supermarket_MainActivity_stringFromJNI3")
  const JNI2Function = Module.findExportByName("libsupermarket.so", "Java_com_example_supermarket_MainActivity_stringFromJNI2")
  const JNIFunction = Module.findExportByName("libsupermarket.so", "Java_com_example_supermarket_MainActivity_stringFromJNI")
  if (JNI3Function)
  {
    Interceptor.attach(JNI3Function,
    {
      onEnter: function (args)
      {
        // console.log("puntero: ", args[0].readPointer(), args[0])
        console.log('Entra en FromJNI3:')
        var arg1 = args[0].readPointer()
        readaddrs(arg1)
      },
      onLeave: function (args)
      {
        console.log("Sale de FromJNI3")
        console.log(args)
        args.replace(0x0)
      }
    })
  }
  if (JNI2Function)
  {
    Interceptor.attach(JNI2Function,
    {
      onEnter: function (args)
      {
        var arg1 = args[0].readPointer()
        readaddrs(arg1)
        console.log('Entra en FromJNI2')
      },
      onLeave: function (args)
      {
        console.log("Sale de FromJNI2")
        console.log(args)
        args.replace(0x1)
      }
    })
  }
  if (JNIFunction)
  {
    Interceptor.attach(JNIFunction,
    {
      onEnter: function (args)
      {
        console.log('Entra en FromJNI')
        var arg1 = args[0].readPointer()
        readaddrs(arg1)
      },
      onLeave: function (args)
      {
        console.log("Sale de FromJNI")
        console.log(args)
        args.replace(0x1)
      }
    })
  }*/
// send(Module.enumerateExports("libsupermarket.so"))
// console.log('Valor 1:', Base_libsupermarketSo)
// console.log('Valor hexa:', (0xd723a044 - Base_libsupermarketSo).toString(16).toUpperCase())





});


//Apuntes para instance (Gemini)
/*
const someClass = Java.use("com.example.SomeClass");
const instance = someClass.$new();

// Obtener el método setter
const setSomeValueMethod = someClass.class.getDeclaredMethod("setSomeValue", "int");

// Invocar el método setter con el nuevo valor
Java.callStaticMethod(setSomeValueMethod, instance, 10);
*/