Java.perform(function() {
  const strings = Java.use("java.lang.String");
  const Toast = Java.use("android.widget.Toast")
  const MainActivity = Java.use("com.example.supermarket.MainActivity")
  const Cipher = Java.use("javax.crypto.Cipher")



  //Funciones
  function escribir(str)
  {
    var str = strings.$new(str)
    Toast.makeText(Java.use("android.app.ActivityThread").currentApplication().getApplicationContext(), str, 1).show()
  }

  //MAIN
  MainActivity.onCreate.implementation = function (v1)
  {
    escribir("Escribe un descuento cualquiera...")
    this.onCreate(v1)
  }

  //CIPHER
  Cipher.doFinal.overload('[B').implementation = function (v1)
  {
    var ret = this.doFinal(v1)
    escribir(strings.$new(ret))
    return ret
  }
})