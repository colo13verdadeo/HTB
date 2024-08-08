import time
import random
import struct



def BitAndBit(a, b):
    bin_a = f"{a:b}"
    bin_b = f"{b:b}"

    max_len = max(len(bin_a), len(bin_b))
    bin_a = bin_a.zfill(max_len)
    bin_b = bin_b.zfill(max_len)

    # Realizar la operación bit a bit
    result = ''.join('1' if bin_a[i] == '1' and bin_b[i] == '1' else '0' for i in range(max_len))

    return int(result, 2)

def ROLB(numero, cantidad=0): #Mover a la izquierda un binario (1111 => 11110)
    if cantidad:
        return (numero << cantidad)
    # Obtener el bit más significativo
    msb = numero & (1 << (numero.bit_length() - 1))
    shift_amount = max(numero.bit_length() - 2, 0)

    ### Arreglar en el futuro (!) ###
    if numero <= 3:
        msb = 0
        shift_amount = 2
    # Rotarlo a la izquierda y combinar con el `msb`
    return (numero << 1) | (msb >> shift_amount)

def rand():
    RAND_MAX = 2**31 - 1
    return (random.randint(0, RAND_MAX))


def encrypt(palabra):
    PalabraOrg =    palabra
    PalabraEncry =  ""
    ret = []
    for char in PalabraOrg:
        rand1 =     rand()
        letra =   ord(char) ^ rand1
        rand2 =     BitAndBit(rand(), 7)
        letra =   ROLB(letra, rand2)
        # print(char, rand1, rand2, letra)
        ret.append(letra)
        letra = (letra & 0xFF)
        PalabraEncry = PalabraEncry + chr(letra)
    print('Palabra original:', palabra, '\nEncryptado:', PalabraEncry)
    return ret

def desencrypt(palabra):
    palabra = ""
    for char in PalabraEncry:
        rand1 = rand()
        rand2 = BitAndBit(rand(), 7)
        char = char >> rand2
        char = char ^ rand1

##DEBUG
        print(char)
##
        palabra = palabra + chr(char)
    print(palabra)
    return palabra

def SetSeed(seed):
    random.seed(seed)

def GetSeed(archivo):
    with open(archivo, 'rb') as archivo:
        seed = struct.unpack('I', archivo.read(4))[0]
        # print(seed)
        return seed

def desencrypt_v2(archivo):
    semilla = GetSeed(archivo)
    SetSeed(semilla)

    with open(archivo, 'rb') as archivo:
        archivo.seek(5)
        while True:
            char = archivo.read(1)
            if not char:
                print('Llego al final.')
                break

            rand1 = rand()
            rand2 = BitAndBit(rand(), 7)

            char = char[0] >> rand2
            char = rand1 ^ char

            char = chr(char & 0xFF)
            print(char)


print('--')
PalabraEncry =      encrypt('Python')
# PalabraDesEncrypt = desencrypt(PalabraEncry)

desencrypt_v2('flag.enc')



print('--')

