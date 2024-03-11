Java.perform(function() {
  // Use send() for logging
  console.log("Iniciando... ")
  var Toast = Java.use("android.widget.Toast")
  var MainActivity = Java.use('com.example.angler.MainActivity')
  var exampl = Java.use('com.example.angler.MainActivity$a')
  // console.log(Java.use('com.example.angler.MainActivity').class.getDeclaredClasses())
  var exploit1 = Java.use('d.g')
  var aux = Java.use('android.widget.TextView')
  var d = Java.use('s.d')
  // console.log(MainActivity.class.getDeclaredMethods())
  // console.log(exploit1.class.getDeclaredMethods())


  //Pruebas
  exampl.onReceive.overload('android.content.Context', 'android.content.Intent').implementation = function (v1, v2)
  {
    console.log('Entro en exampl')
    return this.onReceive(v1, v2)
  }

  //TOAST
  Toast.makeText.overload('android.content.Context', 'java.lang.CharSequence', 'int').implementation = function (v1, v2, v3)
  {
      console.log('Pasa por makeText: ', v1, ' - ', v2, ' - ', v3, ' FIN ')
      v2 = Java.use("java.lang.String").$new(v2)
      return this.makeText(v1, v2, v3)
  }
  
  // var eje = Java.use("android.content.BroadcastReceiver")
  // console.log(eje.onReceive.overload('android.content.Context', 'android.content.Intent'))
  // eje.onReceive.overload('android.content.Context', 'android.content.Intent').$new(Java.use("android.app.ActivityThread").currentApplication().getApplicationContext(), Java.use("android.content.Intent").$new("Is_on", "yes"))
  
  // exampl.onReceive.overload('android.content.Context', 'android.content.Intent')
  var main;
  // Java.choose("com.example.angler.MainActivity$a",
  Java.choose("com.example.angler.MainActivity$a",
  {
    onMatch : function(instance){
//       // This function will be called for every instance found by frida
      console.log("Instance: " + instance );
      main = instance
    },
//       var nuevo = exampl
//       var vvv2 = exampl.onReceive.overload('android.content.Context', 'android.content.Intent')

// //       Looper.prepare();
// // const intentClass = Java.use("android.content.Intent");
// // const fooClass = MainActivity
// // var intent = intentClass.$new();
// // intent.setAction("com.example.Broadcast");
// // var foo = fooClass.$new();
// // intent.putExtra("foo ", foo);
// // Looper.myLooper().quit();
//       // var fintent = Java.use("android.content.Intent");
//       // var fintentvvv2 = fintent.$new.overload('android.content.Context', 'java.lang.Class')
//       // var fintentvv3 = fintentvvv2.call(instance, exampl)
//       // var contexto = Java.use("android.app.ActivityThread").currentApplication().getApplicationContext()
//       // console.log(fintentvv3)
//       // var vv3 = vvv2.call(instance, contexto, "hols")//Java.use("android.content.Intent").$new("Is_on", "yes"))
//     },
  onComplete : function(){}
})
Java.choose("g0.c$f",
{
  onMatch : function(instance){
//       // This function will be called for every instance found by frida
    console.log("Instance: " + instance);
  },
onComplete : function(j){
    console.log('Completado: ', j)
}
})



  
  //Main
  MainActivity.onCreate.implementation = function (v1)
  {
    console.log('onCreate: ', v1, Java.use("android.app.ActivityThread").currentApplication().getApplicationContext())
    var str = Java.use("java.lang.String").$new("Look me inside")
    Toast.makeText(Java.use("android.app.ActivityThread").currentApplication().getApplicationContext(), str, 1).show()
    var Intans = MainActivity.$new()
    var strings= Java.use("java.lang.String");
    console.log('Tesz2: ', Intans.getInfo(d.d(strings.$new("@|uqcu0t~7d0{y||0}u1Y7||0du||0ie0gxubu0dxu0v|qw0yc>"))))  
    // var Intans2 = exampl.$new()
    var eje = Java.use("android.content.BroadcastReceiver")
    // console.log(eje.onReceive.overload('android.content.Intent', 'boolean'))
    // eje.onReceive(Java.use("android.app.ActivityThread").currentApplication().getApplicationContext(), Java.use("android.content.Intent").$new("Is_on", "yes"))
    // eje.onReceive(Java.use("android.app.ActivityThread").currentApplication().getApplicationContext(), true)
    // Intans2 = Intans2.putExtra("Is_on", "yes")
    console.log('PRUEBA: ', this.f1754x)
  var flag = Java.use("g0.c$f")
  flag.toString.implementation = function (){console.log('CCCCCCCCCCX'); return this.toString()}
    console.log('Tesz: ', Intans.getInfo(d.d(Java.use("java.lang.String").$new("XDR"))))
    console.log('Tesz: nuevo', Intans.getInfo(d.d("XDR")))
    // console.log("-Flag?:", flag.$toString())
    console.log('Tesz: ', Intans.getInfo(d.d(flag.toString())))
    console.log(d.d("@|uqcu0t\u007f~7d0{y||0}u1\u001aY7||0du||0i\u007fe0gxubu0dxu0v|qw0yc>"))
    // console.log(MainActivity.v)
    // Toast.makeText()
    // exampl.w.setText(d.d("@|uqcu0t\u007f~7d0{y||0}u1\u001aY7||0du||0i\u007fe0gxubu0dxu0v|qw0yc>"))
    return this.onCreate(v1)
  }
  var testeos = Java.use("android.view.Window")
  testeos.addFlags.overload('int').implementation = function ()
  {
    console.log("Entra en flags")
    return this.addFlags()
  }
  MainActivity.getWindow.implementation = function ()
  {
    console.log('Entra en windows')
    debugger
    return this.getWindow()
  }
  
  
  var ImageView = Java.use("android.widget.ImageView")
  ImageView.setImageResource.overload('int').implementation = function (v1)
  {
    console.log('Entra en ImageSource', v1)
    return this.setImageResource(v1)
  }
// console.log(MainActivity.w)
var TextView = Java.use("android.widget.TextView")
// console.log(TextView.setText)
TextView.setText.overload('java.lang.CharSequence').implementation = function(v1)
{
  console.log("Entra en setText: ", v1)
  if (v1 == "100%")
  {
    // ImageView.setImageResource()
    return this.setText(Java.use("java.lang.String").$new("1%"))
  }
  return this.setText(v1)
}
console.log(Java.use('android.content.Intent').getIntent.overload('java.lang.String'))

var instancez = MainActivity.ImageView;
// var result = instancez.setImageResource(0x7f0700d2)


  d.d.overload('java.lang.String').implementation = function (v1)
  {
    console.log('Entro en d', v1)
    return this.d(v1)
  }
  MainActivity.getInfo.implementation = function(v1)
  {
    console.log("Pasa por getinfo")
    // console.log(MainActivity.class.getMethods())
    // MainActivity.x.setImageResource.overload('int').invoke(2131165394)
    return this.getInfo(v1)
  }
  
  // console.log(Module.enumerateExports("libangler.so"))
  var adrs = Module.findExportByName("libangler.so", "Java_com_example_angler_MainActivity_getInfo")
  console.log("adrs ok?: ", adrs)
  Interceptor.attach(adrs,
  {
    onEnter: function(args)
    {
      console.log(args[0], 'args')
    },
    onLeave: function(args2)
    {
      console.log("retorna:", args2[0])
    }
  })
  // console.log(MainActivity.class.getDeclaredMethod('getInfo', [String.class]))
  // console.log(Object.getOwnPropertyNames(MainActivity.x).join(', '))
});













//Codigo obsoleto
//   MainActivityClass.getInstance.overload('java.lang.String').implementation = function(v1)
//   {
    //     console.log("Log", v1)
//     return this.getInstance(v1)
//   }

// Crear una instancia de la actividad (opcional)
// Puedes omitir este paso si solo necesitas acceder al método estáticamente
//   var activity = MainActivityClass.$new();

  // Encontrar la clase anidada a
//   var aClass = MainActivityClass.class.findNestedClass("a");
//   var aClass = Java.classForName("com.example.apkey.a");

// Crear una instancia de la clase anidada a
//   var aInstance = aClass.$new();

// Acceder al método onClick
//   var onClickMethod = aClass.class.getMethod("onClick", View.class);

  // Intento de simular el click del botón
  // activity.f927b.click();
  
  // Intento de llamar al método onClick
  //   onClickMethod.invoke(aInstance, null); // Pasamos null como argumento View