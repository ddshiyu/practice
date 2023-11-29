# java基础

## 一、JAVA简介
Java是将代码编译成一种“字节码”，它类似于抽象的CPU指令，然后，针对不同平台编写虚拟机，不同平台的虚拟机负责加载字节码并执行，这样就实现了“一次编写，到处运行”的效果。

- Java SE（Standard Edition）：标准版，包含标准的JVM和标准库
- Java EE（Enterprise Edition）：企业版，在Java SE的基础上加上了大量的API和库，以便方便开发Web应用、数据库、消息服务
- Java ME（Micro Edition）：针对嵌入式设备的“瘦身版”，Java SE的标准库无法在Java ME上使用
#### JDK
```
┌─    ┌──────────────────────────────────┐
  │     │     Compiler, debugger, etc.     │
  │     └──────────────────────────────────┘
 JDK ┌─ ┌──────────────────────────────────┐
  │  │  │                                  │
  │ JRE │      JVM + Runtime Library       │
  │  │  │                                  │
  └─ └─ └──────────────────────────────────┘
        ┌───────┐┌───────┐┌───────┐┌───────┐
        │Windows││ Linux ││ macOS ││others │
        └───────┘└───────┘└───────┘└───────┘
```
JVM：运行JAVA的虚拟机
JAVA_HOME的bin目录下找到很多可执行文件：

- java：这个可执行程序其实就是JVM，运行Java程序，就是启动JVM，然后让JVM执行指定的编译后的代码；
- javac：这是Java的编译器，它用于把Java源码文件（以.java后缀结尾）编译为Java字节码文件（以.class后缀结尾）；
- jar：用于把一组.class文件打包成一个.jar文件，便于发布；
- javadoc：用于从Java源码中自动提取注释并生成文档；
- jdb：Java调试器，用于开发阶段的运行调试。
### 1.1 第一个java程序
```javascript
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```
类名是Hello，大小写敏感，class用来定义一个类，public表示这个类是公开的，首字母H要大写
main方法是可执行的代码块，一个方法除了方法名main，还有用()括起来的方法参数，这里的main方法有一个参数，参数类型是String[]，参数名是args，public、static用来修饰方法，这里表示它是一个公开的静态方法，void是方法的返回类型，而花括号{}中间的就是方法的代码。
当我们把代码保存为文件时，文件名必须是Hello.java，而且**文件名**也要注意大小写，因为要和我们定义的**类名Hello**完全保持一致。
#### 运行
先用javac把Hello.java编译成字节码文件Hello.class，然后，用java命令执行这个字节码文件
#### 注释
```javascript
// 这是注释...

/*
这是注释
blablabla...
这也是注释
*/

/**
 * 可以用来自动创建文档的注释
 * 
 * @auther liaoxuefeng
 */
```
### 1.2 变量和数据类型
在Java中，变量分为两种：基本类型的变量和引用类型的变量。
#### 基本数据类型

- 整数类型：byte，short，int，long
- 浮点数类型：float，double
- 字符类型：char
- 布尔类型：boolean

计算机内存的最小存储单元是字节（byte），一个字节就是一个8位二进制数，即8个bit。它的二进制表示范围从00000000~11111111，换算成十进制是0~255，换算成十六进制是00~ff。
不同的数据类型占用的字节数不一样
```
       ┌───┐
  byte │   │
       └───┘
       ┌───┬───┐
 short │   │   │
       └───┴───┘
       ┌───┬───┬───┬───┐
   int │   │   │   │   │
       └───┴───┴───┴───┘
       ┌───┬───┬───┬───┬───┬───┬───┬───┐
  long │   │   │   │   │   │   │   │   │
       └───┴───┴───┴───┴───┴───┴───┴───┘
       ┌───┬───┬───┬───┐
 float │   │   │   │   │
       └───┴───┴───┴───┘
       ┌───┬───┬───┬───┬───┬───┬───┬───┐
double │   │   │   │   │   │   │   │   │
       └───┴───┴───┴───┴───┴───┴───┴───┘
       ┌───┬───┐
  char │   │   │
       └───┴───┘
```
#### 整型
各种整型能表示的最大范围如下：

- byte：-128 ~ 127
- short: -32768 ~ 32767
- int: -2147483648 ~ 2147483647
- long: -9223372036854775808 ~ 9223372036854775807

**特别注意：同一个数的不同进制的表示是完全相同的，例如15=0xf＝0b1111。**
#### 浮点型
```
float f1 = 3.14f;
float f2 = 3.14e38f; // 科学计数法表示的3.14x10^38
double d = 1.79e308;
double d2 = -1.79e308;
double d3 = 4.9e-324; // 科学计数法表示的4.9x10^-324
```
#### 布尔类型
尔类型`boolean`只有`true`和`false`两个值
##### 字符类型
字符类型`char`表示一个字符。Java的`char`类型除了可表示标准的ASCII外，还可以表示一个`Unicode`字符
```
public class Main {
    public static void main(String[] args) {
        char a = 'A';
        char zh = '中';
        System.out.println(a);
        System.out.println(zh);
    }
}
```
**注意char类型使用单引号**`**'**`**，且仅有一个字符，要和双引号**`**"**`**的字符串类型区分开。**
#### 引用类型
除了上述基本类型的变量，剩下的都是引用类型。例如，引用类型最常用的就是String字符串：
```
String s = "hello";
```
引用类型的变量类似于C语言的指针，它内部存储一个“地址”，指向某个对象在内存的位置。
#### 常量
定义变量的时候，如果加上final修饰符，这个变量就变成了常量
```
final double PI = 3.14; // PI是一个常量
double r = 5.0;
double area = PI * r * r;
PI = 300; // compile error!
```
常量在定义时进行初始化后就不可**再次赋值**，再次赋值会导致编译错误。
#### var关键字
有些时候，类型的名字太长，写起来比较麻烦。例如：
```
StringBuilder sb = new StringBuilder();
```
这个时候，如果想省略变量类型，可以使用var关键字：
```
var sb = new StringBuilder();
```
编译器会根据赋值语句自动推断出变量sb的类型是StringBuilder。对编译器来说，语句：
```
var sb = new StringBuilder();
```
实际上会自动变成：
```
StringBuilder sb = new StringBuilder();
```
因此，使用var定义变量，仅仅是少写了变量类型而已。
#### 变量的作用范围
Java有块级作用域，{}代表一个区域，变量只在当前作用域生效。
### 1.3 整数运算
Java的整数运算遵循四则运算规则，可以使用任意嵌套的小括号
#### 溢出
整数由于存在范围限制，如果计算结果超出了范围，就会产生溢出，而溢出_不会出错。_
```
public class Main {
    public static void main(String[] args) {
        int x = 2147483640;
        int y = 15;
        int sum = x + y;
        System.out.println(sum); // -2147483641
    }
}
// 解释
0111 1111 1111 1111 1111 1111 1111 1000
+ 0000 0000 0000 0000 0000 0000 0000 1111
-----------------------------------------
  1000 0000 0000 0000 0000 0000 0000 0111
由于最高位计算结果为1，因此，加法结果变成了一个负数。
```
#### 移位运算
```
// 左移
int n = 7;       // 00000000 00000000 00000000 00000111 = 7
int a = n << 1;  // 00000000 00000000 00000000 00001110 = 14
int b = n << 2;  // 00000000 00000000 00000000 00011100 = 28
int c = n << 28; // 01110000 00000000 00000000 00000000 = 1879048192
int d = n << 29; // 11100000 00000000 00000000 00000000 = -536870912
// 右移
int n = 7;       // 00000000 00000000 00000000 00000111 = 7
int a = n >> 1;  // 00000000 00000000 00000000 00000011 = 3
int b = n >> 2;  // 00000000 00000000 00000000 00000001 = 1
int c = n >> 3;  // 00000000 00000000 00000000 00000000 = 0
// 负数右移
int n = -536870912;
int a = n >> 1;  // 11110000 00000000 00000000 00000000 = -268435456
int b = n >> 2;  // 11111000 00000000 00000000 00000000 = -134217728
int c = n >> 28; // 11111111 11111111 11111111 11111110 = -2
int d = n >> 29; // 11111111 11111111 11111111 11111111 = -1
// 无符号右移，不管符号位，右移后高位总是补0
int n = -536870912;
int a = n >>> 1;  // 01110000 00000000 00000000 00000000 = 1879048192
int b = n >>> 2;  // 00111000 00000000 00000000 00000000 = 939524096
int c = n >>> 29; // 00000000 00000000 00000000 00000111 = 7
int d = n >>> 31; // 00000000 00000000 00000000 00000001 = 1
```
对byte和short类型进行移位时，会首先转换为int再进行位移。
仔细观察可发现，左移实际上就是不断地×2，右移实际上就是不断地÷2。
#### 按位运算

- 按位与（&）

对应的位都为1，那么结果就是1， 如果任意一个位是0 则结果就是0。
```
// 1的二进制表示为: 00000000 00000000 00000000 00000001
// 3的二进制表示为: 00000000 00000000 00000000 00000011
// -----------------------------
// 1的二进制表示为: 00000000 00000000 00000000 00000001
console.log(1 & 3)     // 1
```

- 按位或（|）

| 运算符跟 & 的区别在于如果对应的位中任一个操作数为1 那么结果就是1。
```
// 1的二进制表示为: 00000000 00000000 00000000 00000001
// 3的二进制表示为: 00000000 00000000 00000000 00000011
// -----------------------------
// 3的二进制表示为: 00000000 00000000 00000000 00000011
console.log(1 | 3)     // 3
```

- 按位异或（^）

^ 如果对应两个操作位有且仅有一个1时结果为1，其他都是0。
```
// 1的二进制表示为: 00000000 00000000 00000000 00000001
// 3的二进制表示为: 00000000 00000000 00000000 00000011
// -----------------------------
// 2的二进制表示为: 00000000 00000000 00000000 00000010
console.log(1 ^ 3)     // 2
```

- 按位非

~ 运算符是对位求反，1变0, 0变1，也就是求二进制的反码。
```
// 1的二进制表示为: 00000000 00000000 00000000 00000001
// 3的二进制表示为: 00000000 00000000 00000000 00000011
// -----------------------------
// 1反码二进制表示: 11111111 11111111 11111111 11111110
// 由于第一位（符号位）是1，所以这个数是一个负数。JavaScript 内部采用补码形式表示负数，即需要将这个数减去1，再取一次反，然后加上负号，才能得到这个负数对应的10进制值。
// -----------------------------
// 1的反码减1：     11111111 11111111 11111111 11111101
// 反码取反：       00000000 00000000 00000000 00000010
// 表示为10进制加负号：-2
console.log(~ 1)     // -2
```
#### 运算优先级

- ()
- ! ~ ++ --
- * / %
- + -
- << >> >>>
- &
- |
- += -= *= /=
#### 类型自动提升与强制转型
在运算过程中，如果参与运算的两个数类型不一致，那么计算结果为**较大类型的整型**。例如，short和int计算。
强制转型使用(类型)，**超出范围的强制转型会得到错误的结果**。
```
// 强制转换
int i = 12345;
short s = (short) i; // 12345
```
### 1.4 浮点数
浮点数运算和整数运算相比，只能进行加减乘除这些数值计算，**不能做位运算和移位运算**，**浮点数常常无法精确表示。**
#### 类型提升
如果参与运算的两个数其中一个是整型，那么整型可以自动**提升到浮点型**
注意，在一个复杂的四则运算中，**两个整数的运算**不会出现自动提升的情况
```
double d = 1.2 + 24 / 5; // 5.2   原因24/5等于4
```
#### 强制转型
转型时，浮点数的小数部分会被丢掉
```
int n2 = (int) 12.7; // 12
int n2 = (int) -12.7; // -12
int n3 = (int) (12.7 + 0.5); // 13
```
### 1.5 字符和字符串
字符类型char是基本数据类型
```
int n1 = 'A'; // 字母“A”的Unicodde编码是65
int n2 = '中'; // 汉字“中”的Unicode编码是20013
```
#### 字符串类型
字符串类型String是引用类型，使用`“”`
```
String s = ""; // 空字符串，包含0个字符
String s1 = "A"; // 包含一个字符
String s = "abc\"xyz"; // 包含7个字符: a, b, c, ", x, y, z,使用转义字符\
```
#### 字符串连接
使用`+`连接任意字符串和其他数据类型，用`+`连接字符串和其他数据类型，会将其他数据类型先自动转型为字符串。
#### 多行字符串
字符串可以用`"""..."""`表示多行字符串。
```
public class Main {
    public static void main(String[] args) {
        String s = """
                   SELECT * FROM
                     users
                   WHERE id > 100
                   ORDER BY name DESC
                   """;
        System.out.println(s);
    }
}
```
#### 不可变特性
```
public class Main {
    public static void main(String[] args) {
        String s = "hello";
        System.out.println(s); // 显示 hello
        s = "world";
        System.out.println(s); // 显示 world
    }
}
```
执行String s = "hello";时，JVM虚拟机先创建字符串"hello"，然后，把字符串变量s指向它：
```
      s
      │
      ▼
┌───┬───────────┬───┐
│   │  "hello"  │   │
└───┴───────────┴───┘
```
紧接着，执行s = "world";时，JVM虚拟机先创建字符串"world"，然后，把字符串变量s指向它：
```
      s ──────────────┐
                      │
                      ▼
┌───┬───────────┬───┬───────────┬───┐
│   │  "hello"  │   │  "world"  │   │
└───┴───────────┴───┴───────────┴───┘
```
原来的字符串"hello"还在，只是我们无法通过变量s访问它而已。因此，字符串的不可变是指字符串内容不可变。至于变量，可以一会指向字符串"hello"，一会指向字符串"world"。
```
public class Main {
    public static void main(String[] args) {
        String s = "hello";
        String t = s;
        s = "world";
        System.out.println(t); // t是"hello"
    }
}
```
引用类型的变量可以指向一个空值**null**，它表示不存在，即该变量不指向任何对象。
### 1.6 数组类型
```
public class Main {
    public static void main(String[] args) {
        // 5位同学的成绩:
        int[] ns = new int[5];
        ns[0] = 68;
        ns[1] = 79;
        ns[2] = 91;
        ns[3] = 85;
        ns[4] = 62;
				System.out.println(ns.length);
      	// 直接定义数组
				int[] ns = new int[] { 68, 79, 91, 85, 62 };
      	// 简写
      	int[] ns = { 68, 79, 91, 85, 62 };
    }
}
```
定义一个数组类型的变量，使用数组类型“类型[]”。
特点

- 数组所有元素初始化为默认值，整型都是0，浮点型是0.0，布尔型是false；
- 数组一旦创建后，大小就不可改变。
- 索引超出范围，运行时将报错。
#### 引用类型数组
```
String[] names = {
    "ABC", "XYZ", "zoo"
};
```
对于String[]类型的数组变量names，它实际上包含3个元素，但每个元素都指向某个字符串对象：
```
          ┌─────────────────────────┐
    names │   ┌─────────────────────┼───────────┐
      │   │   │                     │           │
      ▼   │   │                     ▼           ▼
┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┐
│   │░░░│░░░│░░░│   │ "ABC" │   │ "XYZ" │   │ "zoo" │   │
└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┘
      │                 ▲
      └─────────────────┘
```
对names[1]进行赋值，例如names[1] = "cat";，效果如下：
```
          ┌─────────────────────────────────────────────────┐
    names │   ┌─────────────────────────────────┐           │
      │   │   │                                 │           │
      ▼   │   │                                 ▼           ▼
┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┬───────┬───┐
│   │░░░│░░░│░░░│   │ "ABC" │   │ "XYZ" │   │ "zoo" │   │ "cat" │   │
└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┴───────┴───┘
      │                 ▲
      └─────────────────┘
```
这里注意到原来names[1]指向的字符串"XYZ"并没有改变，仅仅是将names[1]的引用从指向"XYZ"改成了指向"cat"，其结果是字符串"XYZ"再也无法通过names[1]访问到了。
### 1.7 输入和输出
`println`是print line的缩写，表示输出并换行，否则用print()。
```
// 格式化输出
public class Main {
    public static void main(String[] args) {
        double d = 3.1415926;
        System.out.printf("%.2f\n", d); // 显示两位小数3.14
        System.out.printf("%.4f\n", d); // 显示4位小数3.1416
    }
}
```
| 占位符 | 说明 |
| --- | --- |
| %d | 格式化输出整数 |
| %x | 格式化输出十六进制整数 |
| %f | 格式化输出浮点数 |
| %e | 格式化输出科学计数法表示的浮点数 |
| %s | 格式化字符串 |

#### 输入
```
import java.util.Scanner; // 导入工具库

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // 创建Scanner对象
        System.out.print("Input your name: "); // 打印提示
        String name = scanner.nextLine(); // 读取一行输入并获取字符串
        System.out.print("Input your age: "); // 打印提示
        int age = scanner.nextInt(); // 读取一行输入并获取整数
        System.out.printf("Hi, %s, you are %d\n", name, age); // 格式化输出
    }
}
```
直接使用System.in读取用户输入虽然是可以的，但需要更复杂的代码，而通过Scanner就可以简化后续的代码。
### 1.8 if 判断
这块大部分语言都差不多。
#### 浮点数比较
浮点数在计算机中常常无法精确表示，并且计算可能出现误差，正确的方法是利用差值小于某个临界值。
```
public class Main {
    public static void main(String[] args) {
        double x = 1 - 9.0 / 10;
        if (Math.abs(x - 0.1) < 0.00001) {
            System.out.println("x is 0.1");
        } else {
            System.out.println("x is NOT 0.1");
        }
    }
}
```
#### 引用类型比较
使用`==`不能比较引用类型，需要使用`equals`方法
```
public class Main {
    public static void main(String[] args) {
        String s1 = "hello";
        String s2 = "HELLO".toLowerCase();
        System.out.println(s1);
        System.out.println(s2);
        if (s1.equals(s2)) {
            System.out.println("s1 equals s2");
        } else {
            System.out.println("s1 not equals s2");
        }
    }
}
```
**注意，如果s1为null，则会报错，可以使用**`**&&**`**短路操作避免。**
### 1.9 switch 判断
switch与其他语言也无大区别。
使用switch时，如果**遗漏了break**，就会造成严重的逻辑错误，从Java 12开始，switch语句升级为更简洁的表达式语法，使用类似模式匹配（Pattern Matching）的方法，保证只有一种路径会被执行，并且**不需要break语句**，**多条语句，需要用{}括起来，**还可以**直接返回值。**
```
public class Main {
    public static void main(String[] args) {
        String fruit = "apple";
        switch (fruit) {
        case "apple" -> System.out.println("Selected apple");
        case "pear" -> System.out.println("Selected pear");
        case "mango" -> {
            System.out.println("Selected mango");
            System.out.println("Good choice!");
        }
				case "apple" -> 1; // 这是直接返回值
        default -> System.out.println("No fruit selected");
        }
    }
}
```
如果需要复杂的语句，我们也可以写很多语句，放到{...}里，然后，用yield返回一个值作为switch语句的返回值：
```
public class Main {
    public static void main(String[] args) {
        String fruit = "orange";
        int opt = switch (fruit) {
            case "apple" -> 1;
            case "pear", "mango" -> 2;
            default -> {
                int code = fruit.hashCode();
                yield code; // switch语句返回值
            }
        };
        System.out.println("opt = " + opt);
    }
}
```
### 2.0 for循环
#### for each循环
```java
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        for (int n : ns) {
            System.out.println(n);
        }
    }
}
```
访问的是数组每个元素的值
### 2.1 数组遍历
#### 打印数组内容
直接打印数组变量，得到的是数组在JVM中的引用地址，类似 [I@7852e922，使用Arrays.toString(ns)
```java
import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 1, 2, 3, 5, 8 };
        // 这样可以打印出数组
        System.out.println(Arrays.toString(ns));
    }
}

```
### 2.2 数组排序
使用Arrays.sort()对数组进行排序，数组排序实际上修改了数组本身，在内存中的顺序会发生变化。
### 2.3 多维数组
Arrays.deepToString()，可以打印出多维数组。
## 二、面向对象编程
### 2.1 概念
class是一种对象模版，它定义了如何创建实例，instance是对象实例，instance是根据class创建的实例。
```
// 创建类
class Person {
    public String name;
    public int age;
}
// 创建实例	
Person ming = new Person();
// 创建不同的实例
ming.name = "Xiao Ming"; // 对字段name赋值
ming.age = 12; // 对字段age赋值
System.out.println(ming.name); // 访问字段name

Person hong = new Person();
hong.name = "Xiao Hong";
hong.age = 15;
```
### 2.2 方法
直接把`field`用`public`暴露给外部可能会破坏封装性
```
class Person {
    public String name;
    public int age;
}
Person ming = new Person();
ming.name = "Xiao Ming";
ming.age = -99; // age设置为负数 
```
用`private`修饰`field`，直接修改这会报错。
那么如何修改呢，可以**使用方法来修改**。
```
public class Main {
    public static void main(String[] args) {
        Person ming = new Person();
        ming.setName("Xiao Ming"); // 设置name
        ming.setAge(12); // 设置age
        System.out.println(ming.getName() + ", " + ming.getAge());
    }
}
class Person {
    private String name;
    private int age;
    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return this.age;
    }
    public void setAge(int age) {
        if (age < 0 || age > 100) {
            throw new IllegalArgumentException("invalid age value");
        }
        this.age = age;
    }
}
```
`private` 方法也不允许外部调用，那么`private`的意义就是**内部调用**。
#### 可变参数
使用`类型...`可以定义可变参数。
```
class Group {
    private String[] names;

    public void setNames(String... names) {
        this.names = names;
    }
}
Group g = new Group();
g.setNames("Xiao Ming", "Xiao Hong", "Xiao Jun"); // 传入3个String
g.setNames("Xiao Ming", "Xiao Hong"); // 传入2个String
g.setNames("Xiao Ming"); // 传入1个String
g.setNames(); 
```
#### 参数绑定
```
public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        int n = 15; // n的值为15
        p.setAge(n); // 传入n的值
        System.out.println(p.getAge()); // 15
        n = 20; // n的值改为20
        System.out.println(p.getAge()); // 返回15
    }
}

class Person {
    private int age;

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```
基本类型参数的传递，是调用方值的复制。双方各自的后续修改，互不影响。
```
public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        String[] fullname = new String[] { "Homer", "Simpson" };
        p.setName(fullname); // 传入fullname数组
        System.out.println(p.getName()); // "Homer Simpson"
        fullname[0] = "Bart"; // fullname数组的第一个元素修改为"Bart"
        System.out.println(p.getName()); // "Homer Simpson"还是"Bart Simpson"?
    }
}

class Person {
    private String[] name;

    public String getName() {
        return this.name[0] + " " + this.name[1];
    }

    public void setName(String[] name) {
        this.name = name;
    }
}
```
引用类型参数的传递，调用方的变量，和接收方的参数变量，指向的是同一个对象。双方任意一方对这个对象的修改，都会**影响对方**（因为指向同一个对象嘛）。
```
public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        String bob = "Bob";
        p.setName(bob); // 传入bob变量
        System.out.println(p.getName()); // "Bob"
        bob = "Alice"; // bob改名为Alice
        System.out.println(p.getName()); // "Bob"
    }
}

class Person {
    private String name;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```
两次都返回Bob，这还是由于字符串的不可变性。
