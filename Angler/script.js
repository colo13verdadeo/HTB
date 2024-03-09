Java.perform(function() {
    console.log("Iniciando... ")
    var Toast = Java.use("android.widget.Toast")
    var MainActivity = Java.use('com.example.angler.MainActivity')
    var exampl = Java.use('com.example.angler.MainActivity$a')
    var d = Java.use('s.d')

    var key = "Fak_U_Angler!"

    //Funciones
    function hex2char(hex) {
        const charCode = parseInt(hex, 16);
        if (isNaN(charCode))
            return "";
        return String.fromCharCode(charCode);
    }

    function hex2ascii(hexString) {
        if (!hexString)
            return "";
        const asciiChars = [];
        var i = 0;
        while (i < hexString.length) {
            const byte = hexString.substring(i, i + 2);
            const char = hex2char(byte);
            asciiChars.push(char);
            i += 2;
        }
        return asciiChars.join("");
    }

    function check(str) {
        if (str == "Fak_U_Angler!" || str == key)
            return (1);
        return (0);
    }
    //Toast
    var TextView = Java.use("android.widget.TextView")
    TextView.setText.overload('java.lang.CharSequence').implementation = function(v1) {
        if (v1 == "100%") {
            // ImageView.setImageResource()
            return this.setText(Java.use("java.lang.String").$new(key))
        }
        return this.setText(v1)
    }
    //Main
    MainActivity.onCreate.implementation = function(v1) {
        //Variables globales de Main
        const strings = Java.use("java.lang.String")
        var Intans = MainActivity.$new()
        const data = Java.use("android.app.ActivityThread").currentApplication().getApplicationContext()
        var msg = Java.use("java.lang.String").$new(key)
        Toast.makeText(data, msg, 1).show()

        //Interceptar libc.so
        const strncmp_lib = Module.getExportByName("libc.so", "strcmp")
        if (strncmp_lib) {
            Interceptor.attach(strncmp_lib, {
                onEnter: function(args) {
                    if (check(args[0].readCString()) || check(args[1].readCString())) {
                        var arg1 = args[0].readCString()
                        var arg2 = args[1].readCString()
                        console.log(arg1, arg2)
                        console.log('Comparando: ' + key + 'con: ', arg2.localeCompare(arg1))
                        console.log('Arreglandolo...', arg2.localeCompare(arg2))
                        if (!arg2.localeCompare(arg2)) {
                            key = hex2ascii(arg2)
                            console.log('PWNED!')
                            console.log(key)
                        } else
                            console.log('Not pwned')
                    }
                }
            })
        }
        //Interceptar libreria protegida nativamente
        const Base_libanglerSo = Module.findBaseAddress("libangler.so")
        var illusion = Base_libanglerSo.add(0x36260)
        if (illusion) {
            Interceptor.attach(illusion, {
                onEnter: function(v1) {
                    key = v1[0].readCString()
                    console.log('Encodeando ' + key, v1[0].readCString())
                }
            })
        }
        Intans.getInfo(d.d(strings.$new(key)))
        return this.onCreate(v1)
    }
})