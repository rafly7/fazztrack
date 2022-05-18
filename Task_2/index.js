// Perbedaan var, let, const

/**
 * var
 * adalah variabel dengan tipe access modifier scope global
 * dan bisa mengreassign variabel tersebut dengan keyword var
 */

/**
 * let
 * adalah variabel dengan tipe access modifier bloc scope
 * dan bisa mengreassign variabel tersebit dengan keyword let
 */

/**
 * const
 * adalah varibel dengan tipe access modifier bloc scope
 * dan tidak bisa mengreassign variabel tersebut jika dengan keyword const
 */

/**
 * String
 * adalah tipe data teks
 */
const str = 'Hello'

/**
 * Number
 * adalah tipe data bilangan bulat
 */
const num = 1

/**
 * Boolean
 * adalah tipe data dengan statement yang memuat dua nilai true atau false
 */
const isTrue = false

/**
 * Object
 * adalah tipe data yang memiliki berisi banyak macam data umumnya berupa key and value
 * tetapi bisa juga berupa pada class yang tidak memiliki key and value
 */
const firstObj = {
  nama: 'i\'m object'
}

class Foo {

}
const secondObj = new Foo()

/**
 * Array
 * adalah tipe data yang bisa menyimpan banyak macam tipe data lain
 * tetapi yang membuat berbeda adalah setiap tipe data memiliki index atau nomor urutannya masing-masing 
 */
const arr = [1, '2', false, {}, undefined, null]

/**
 * Null
 * adalah tipe data yang tidak memiliki nilai
 * tetapi variabel, element array, dan property objek sudah didefinisikan 
 */
const fizz = null

/**
 * Undefined
 * adalah tipe data yang tidak memiliki nilai
 * tetapi variabel, element array, dan property objek belum didefinisikan
 */
const baz = undefined

/**
 * Function
 * adalah tipe data yang membungkus variabel lain
 * dengan berbagai macam tipe data kedalam function
 */
function fizzBuzz() {

}
const fungsi = fizzBuzz 

/**
 * Nan
 * adalah tipe data hasil aritmatika
 * dengan menunjukan ketidakmungkinan kedua perhitungan tersebut
 * (ie: pembagian dari 0 atau string di hitung dengan number)
 */
const non = NaN
