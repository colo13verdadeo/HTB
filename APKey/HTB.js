Java.perform(function() {
  // Use send() for logging
  console.log("Iniciando... ")
  var prueba1 = Java.use('com.example.apkey.MainActivity')
// Script de Frida
Java.perform(function() {
  // Encontrar la clase MainActivity
  var MainActivityClass = Java.use("java.security.MessageDigest")
  var Inyec = Java.use("com.example.apkey.MainActivity")
  var Toast = Java.use("android.widget.Toast")
  var exploit1 = Java.use("c.b.a.b")
  var exploit2 = Java.use("c.b.a.g")
  //Funciones interceptadas
  //   exploit2.a.implementation = function()
  //   {
  //     console.log('Pasa por exploit2')
  //     return this.a()
  //   }
    //   exploit1.a.overload('java.lang.String').implementation = function(v1)
    //   {
    //     return this.a(v1)
    //   }


Toast.makeText.overload('android.content.Context', 'java.lang.CharSequence', 'int').implementation = function (v1, v2, v3)
{
    console.log('Pasa por makeText: ', v1, ' - ', v2, ' - ', v3, ' FIN ')
    var g_a = exploit2.a()
    console.log("Codigo: ", exploit1.a(g_a))
    var code = exploit1.a(g_a)
    // console.log(typeof(exploit1.a(g_a)))
    var str = Java.use("java.lang.String").$new(code)
    return this.makeText(v1, str, 1)
}
//Interceptar MD5 y los Updates
MainActivityClass.update.overload('[B').implementation = function(v1)
{
    console.log("Log2: (BYTE) ", v1)
    console.log("Log2: (DECODEADO) ", String.fromCharCode(v1), "Crear api, el nativo no se ve a veces.")
    // var instanse = Inyec.$new();
    // console.log('pasa: ', instanse.getApplicationContext())
    return this.update(v1)
}

});

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