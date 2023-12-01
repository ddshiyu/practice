import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.1bfda989.js";const h=JSON.parse('{"title":"java基础","description":"","frontmatter":{},"headers":[],"relativePath":"backend/index.md","filePath":"backend/index.md","lastUpdated":1701228408000}'),l={name:"backend/index.md"},p=e(`<h1 id="java基础" tabindex="-1">java基础 <a class="header-anchor" href="#java基础" aria-label="Permalink to &quot;java基础&quot;">​</a></h1><h2 id="一、java简介" tabindex="-1">一、JAVA简介 <a class="header-anchor" href="#一、java简介" aria-label="Permalink to &quot;一、JAVA简介&quot;">​</a></h2><p>Java是将代码编译成一种“字节码”，它类似于抽象的CPU指令，然后，针对不同平台编写虚拟机，不同平台的虚拟机负责加载字节码并执行，这样就实现了“一次编写，到处运行”的效果。</p><ul><li>Java SE（Standard Edition）：标准版，包含标准的JVM和标准库</li><li>Java EE（Enterprise Edition）：企业版，在Java SE的基础上加上了大量的API和库，以便方便开发Web应用、数据库、消息服务</li><li>Java ME（Micro Edition）：针对嵌入式设备的“瘦身版”，Java SE的标准库无法在Java ME上使用</li></ul><h4 id="jdk" tabindex="-1">JDK <a class="header-anchor" href="#jdk" aria-label="Permalink to &quot;JDK&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">┌─    ┌──────────────────────────────────┐</span></span>
<span class="line"><span style="color:#e1e4e8;">  │     │     Compiler, debugger, etc.     │</span></span>
<span class="line"><span style="color:#e1e4e8;">  │     └──────────────────────────────────┘</span></span>
<span class="line"><span style="color:#e1e4e8;"> JDK ┌─ ┌──────────────────────────────────┐</span></span>
<span class="line"><span style="color:#e1e4e8;">  │  │  │                                  │</span></span>
<span class="line"><span style="color:#e1e4e8;">  │ JRE │      JVM + Runtime Library       │</span></span>
<span class="line"><span style="color:#e1e4e8;">  │  │  │                                  │</span></span>
<span class="line"><span style="color:#e1e4e8;">  └─ └─ └──────────────────────────────────┘</span></span>
<span class="line"><span style="color:#e1e4e8;">        ┌───────┐┌───────┐┌───────┐┌───────┐</span></span>
<span class="line"><span style="color:#e1e4e8;">        │Windows││ Linux ││ macOS ││others │</span></span>
<span class="line"><span style="color:#e1e4e8;">        └───────┘└───────┘└───────┘└───────┘</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">┌─    ┌──────────────────────────────────┐</span></span>
<span class="line"><span style="color:#24292e;">  │     │     Compiler, debugger, etc.     │</span></span>
<span class="line"><span style="color:#24292e;">  │     └──────────────────────────────────┘</span></span>
<span class="line"><span style="color:#24292e;"> JDK ┌─ ┌──────────────────────────────────┐</span></span>
<span class="line"><span style="color:#24292e;">  │  │  │                                  │</span></span>
<span class="line"><span style="color:#24292e;">  │ JRE │      JVM + Runtime Library       │</span></span>
<span class="line"><span style="color:#24292e;">  │  │  │                                  │</span></span>
<span class="line"><span style="color:#24292e;">  └─ └─ └──────────────────────────────────┘</span></span>
<span class="line"><span style="color:#24292e;">        ┌───────┐┌───────┐┌───────┐┌───────┐</span></span>
<span class="line"><span style="color:#24292e;">        │Windows││ Linux ││ macOS ││others │</span></span>
<span class="line"><span style="color:#24292e;">        └───────┘└───────┘└───────┘└───────┘</span></span></code></pre></div><p>JVM：运行JAVA的虚拟机 JAVA_HOME的bin目录下找到很多可执行文件：</p><ul><li>java：这个可执行程序其实就是JVM，运行Java程序，就是启动JVM，然后让JVM执行指定的编译后的代码；</li><li>javac：这是Java的编译器，它用于把Java源码文件（以.java后缀结尾）编译为Java字节码文件（以.class后缀结尾）；</li><li>jar：用于把一组.class文件打包成一个.jar文件，便于发布；</li><li>javadoc：用于从Java源码中自动提取注释并生成文档；</li><li>jdb：Java调试器，用于开发阶段的运行调试。</li></ul><h3 id="_1-1-第一个java程序" tabindex="-1">1.1 第一个java程序 <a class="header-anchor" href="#_1-1-第一个java程序" aria-label="Permalink to &quot;1.1 第一个java程序&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">public </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Hello</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">public </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Hello</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#E36209;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello, world!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>类名是Hello，大小写敏感，class用来定义一个类，public表示这个类是公开的，首字母H要大写 main方法是可执行的代码块，一个方法除了方法名main，还有用()括起来的方法参数，这里的main方法有一个参数，参数类型是String[]，参数名是args，public、static用来修饰方法，这里表示它是一个公开的静态方法，void是方法的返回类型，而花括号{}中间的就是方法的代码。 当我们把代码保存为文件时，文件名必须是Hello.java，而且<strong>文件名</strong>也要注意大小写，因为要和我们定义的<strong>类名Hello</strong>完全保持一致。</p><h4 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h4><p>先用javac把Hello.java编译成字节码文件Hello.class，然后，用java命令执行这个字节码文件</p><h4 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 这是注释...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">这是注释</span></span>
<span class="line"><span style="color:#6A737D;">blablabla...</span></span>
<span class="line"><span style="color:#6A737D;">这也是注释</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 可以用来自动创建文档的注释</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@auther</span><span style="color:#6A737D;"> liaoxuefeng</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 这是注释...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">这是注释</span></span>
<span class="line"><span style="color:#6A737D;">blablabla...</span></span>
<span class="line"><span style="color:#6A737D;">这也是注释</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 可以用来自动创建文档的注释</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@auther</span><span style="color:#6A737D;"> liaoxuefeng</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h3 id="_1-2-变量和数据类型" tabindex="-1">1.2 变量和数据类型 <a class="header-anchor" href="#_1-2-变量和数据类型" aria-label="Permalink to &quot;1.2 变量和数据类型&quot;">​</a></h3><p>在Java中，变量分为两种：基本类型的变量和引用类型的变量。</p><h4 id="基本数据类型" tabindex="-1">基本数据类型 <a class="header-anchor" href="#基本数据类型" aria-label="Permalink to &quot;基本数据类型&quot;">​</a></h4><ul><li>整数类型：byte，short，int，long</li><li>浮点数类型：float，double</li><li>字符类型：char</li><li>布尔类型：boolean</li></ul><p>计算机内存的最小存储单元是字节（byte），一个字节就是一个8位二进制数，即8个bit。它的二进制表示范围从00000000~11111111，换算成十进制是0~255，换算成十六进制是00~ff。 不同的数据类型占用的字节数不一样</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">       ┌───┐</span></span>
<span class="line"><span style="color:#e1e4e8;">  byte │   │</span></span>
<span class="line"><span style="color:#e1e4e8;">       └───┘</span></span>
<span class="line"><span style="color:#e1e4e8;">       ┌───┬───┐</span></span>
<span class="line"><span style="color:#e1e4e8;"> short │   │   │</span></span>
<span class="line"><span style="color:#e1e4e8;">       └───┴───┘</span></span>
<span class="line"><span style="color:#e1e4e8;">       ┌───┬───┬───┬───┐</span></span>
<span class="line"><span style="color:#e1e4e8;">   int │   │   │   │   │</span></span>
<span class="line"><span style="color:#e1e4e8;">       └───┴───┴───┴───┘</span></span>
<span class="line"><span style="color:#e1e4e8;">       ┌───┬───┬───┬───┬───┬───┬───┬───┐</span></span>
<span class="line"><span style="color:#e1e4e8;">  long │   │   │   │   │   │   │   │   │</span></span>
<span class="line"><span style="color:#e1e4e8;">       └───┴───┴───┴───┴───┴───┴───┴───┘</span></span>
<span class="line"><span style="color:#e1e4e8;">       ┌───┬───┬───┬───┐</span></span>
<span class="line"><span style="color:#e1e4e8;"> float │   │   │   │   │</span></span>
<span class="line"><span style="color:#e1e4e8;">       └───┴───┴───┴───┘</span></span>
<span class="line"><span style="color:#e1e4e8;">       ┌───┬───┬───┬───┬───┬───┬───┬───┐</span></span>
<span class="line"><span style="color:#e1e4e8;">double │   │   │   │   │   │   │   │   │</span></span>
<span class="line"><span style="color:#e1e4e8;">       └───┴───┴───┴───┴───┴───┴───┴───┘</span></span>
<span class="line"><span style="color:#e1e4e8;">       ┌───┬───┐</span></span>
<span class="line"><span style="color:#e1e4e8;">  char │   │   │</span></span>
<span class="line"><span style="color:#e1e4e8;">       └───┴───┘</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">       ┌───┐</span></span>
<span class="line"><span style="color:#24292e;">  byte │   │</span></span>
<span class="line"><span style="color:#24292e;">       └───┘</span></span>
<span class="line"><span style="color:#24292e;">       ┌───┬───┐</span></span>
<span class="line"><span style="color:#24292e;"> short │   │   │</span></span>
<span class="line"><span style="color:#24292e;">       └───┴───┘</span></span>
<span class="line"><span style="color:#24292e;">       ┌───┬───┬───┬───┐</span></span>
<span class="line"><span style="color:#24292e;">   int │   │   │   │   │</span></span>
<span class="line"><span style="color:#24292e;">       └───┴───┴───┴───┘</span></span>
<span class="line"><span style="color:#24292e;">       ┌───┬───┬───┬───┬───┬───┬───┬───┐</span></span>
<span class="line"><span style="color:#24292e;">  long │   │   │   │   │   │   │   │   │</span></span>
<span class="line"><span style="color:#24292e;">       └───┴───┴───┴───┴───┴───┴───┴───┘</span></span>
<span class="line"><span style="color:#24292e;">       ┌───┬───┬───┬───┐</span></span>
<span class="line"><span style="color:#24292e;"> float │   │   │   │   │</span></span>
<span class="line"><span style="color:#24292e;">       └───┴───┴───┴───┘</span></span>
<span class="line"><span style="color:#24292e;">       ┌───┬───┬───┬───┬───┬───┬───┬───┐</span></span>
<span class="line"><span style="color:#24292e;">double │   │   │   │   │   │   │   │   │</span></span>
<span class="line"><span style="color:#24292e;">       └───┴───┴───┴───┴───┴───┴───┴───┘</span></span>
<span class="line"><span style="color:#24292e;">       ┌───┬───┐</span></span>
<span class="line"><span style="color:#24292e;">  char │   │   │</span></span>
<span class="line"><span style="color:#24292e;">       └───┴───┘</span></span></code></pre></div><h4 id="整型" tabindex="-1">整型 <a class="header-anchor" href="#整型" aria-label="Permalink to &quot;整型&quot;">​</a></h4><p>各种整型能表示的最大范围如下：</p><ul><li>byte：-128 ~ 127</li><li>short: -32768 ~ 32767</li><li>int: -2147483648 ~ 2147483647</li><li>long: -9223372036854775808 ~ 9223372036854775807</li></ul><p><strong>特别注意：同一个数的不同进制的表示是完全相同的，例如15=0xf＝0b1111。</strong></p><h4 id="浮点型" tabindex="-1">浮点型 <a class="header-anchor" href="#浮点型" aria-label="Permalink to &quot;浮点型&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">float f1 = 3.14f;</span></span>
<span class="line"><span style="color:#e1e4e8;">float f2 = 3.14e38f; // 科学计数法表示的3.14x10^38</span></span>
<span class="line"><span style="color:#e1e4e8;">double d = 1.79e308;</span></span>
<span class="line"><span style="color:#e1e4e8;">double d2 = -1.79e308;</span></span>
<span class="line"><span style="color:#e1e4e8;">double d3 = 4.9e-324; // 科学计数法表示的4.9x10^-324</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">float f1 = 3.14f;</span></span>
<span class="line"><span style="color:#24292e;">float f2 = 3.14e38f; // 科学计数法表示的3.14x10^38</span></span>
<span class="line"><span style="color:#24292e;">double d = 1.79e308;</span></span>
<span class="line"><span style="color:#24292e;">double d2 = -1.79e308;</span></span>
<span class="line"><span style="color:#24292e;">double d3 = 4.9e-324; // 科学计数法表示的4.9x10^-324</span></span></code></pre></div><h4 id="布尔类型" tabindex="-1">布尔类型 <a class="header-anchor" href="#布尔类型" aria-label="Permalink to &quot;布尔类型&quot;">​</a></h4><p>尔类型<code>boolean</code>只有<code>true</code>和<code>false</code>两个值</p><h5 id="字符类型" tabindex="-1">字符类型 <a class="header-anchor" href="#字符类型" aria-label="Permalink to &quot;字符类型&quot;">​</a></h5><p>字符类型<code>char</code>表示一个字符。Java的<code>char</code>类型除了可表示标准的ASCII外，还可以表示一个<code>Unicode</code>字符</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        char a = &#39;A&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        char zh = &#39;中&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(a);</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(zh);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        char a = &#39;A&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        char zh = &#39;中&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(a);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(zh);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>注意char类型使用单引号</strong><code>**&#39;**</code><strong>，且仅有一个字符，要和双引号</strong><code>**&quot;**</code><strong>的字符串类型区分开。</strong></p><h4 id="引用类型" tabindex="-1">引用类型 <a class="header-anchor" href="#引用类型" aria-label="Permalink to &quot;引用类型&quot;">​</a></h4><p>除了上述基本类型的变量，剩下的都是引用类型。例如，引用类型最常用的就是String字符串：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">String s = &quot;hello&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">String s = &quot;hello&quot;;</span></span></code></pre></div><p>引用类型的变量类似于C语言的指针，它内部存储一个“地址”，指向某个对象在内存的位置。</p><h4 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h4><p>定义变量的时候，如果加上final修饰符，这个变量就变成了常量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">final double PI = 3.14; // PI是一个常量</span></span>
<span class="line"><span style="color:#e1e4e8;">double r = 5.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">double area = PI * r * r;</span></span>
<span class="line"><span style="color:#e1e4e8;">PI = 300; // compile error!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">final double PI = 3.14; // PI是一个常量</span></span>
<span class="line"><span style="color:#24292e;">double r = 5.0;</span></span>
<span class="line"><span style="color:#24292e;">double area = PI * r * r;</span></span>
<span class="line"><span style="color:#24292e;">PI = 300; // compile error!</span></span></code></pre></div><p>常量在定义时进行初始化后就不可<strong>再次赋值</strong>，再次赋值会导致编译错误。</p><h4 id="var关键字" tabindex="-1">var关键字 <a class="header-anchor" href="#var关键字" aria-label="Permalink to &quot;var关键字&quot;">​</a></h4><p>有些时候，类型的名字太长，写起来比较麻烦。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">StringBuilder sb = new StringBuilder();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">StringBuilder sb = new StringBuilder();</span></span></code></pre></div><p>这个时候，如果想省略变量类型，可以使用var关键字：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var sb = new StringBuilder();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var sb = new StringBuilder();</span></span></code></pre></div><p>编译器会根据赋值语句自动推断出变量sb的类型是StringBuilder。对编译器来说，语句：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var sb = new StringBuilder();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var sb = new StringBuilder();</span></span></code></pre></div><p>实际上会自动变成：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">StringBuilder sb = new StringBuilder();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">StringBuilder sb = new StringBuilder();</span></span></code></pre></div><p>因此，使用var定义变量，仅仅是少写了变量类型而已。</p><h4 id="变量的作用范围" tabindex="-1">变量的作用范围 <a class="header-anchor" href="#变量的作用范围" aria-label="Permalink to &quot;变量的作用范围&quot;">​</a></h4><p>Java有块级作用域，{}代表一个区域，变量只在当前作用域生效。</p><h3 id="_1-3-整数运算" tabindex="-1">1.3 整数运算 <a class="header-anchor" href="#_1-3-整数运算" aria-label="Permalink to &quot;1.3 整数运算&quot;">​</a></h3><p>Java的整数运算遵循四则运算规则，可以使用任意嵌套的小括号</p><h4 id="溢出" tabindex="-1">溢出 <a class="header-anchor" href="#溢出" aria-label="Permalink to &quot;溢出&quot;">​</a></h4><p>整数由于存在范围限制，如果计算结果超出了范围，就会产生溢出，而溢出_不会出错。_</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        int x = 2147483640;</span></span>
<span class="line"><span style="color:#e1e4e8;">        int y = 15;</span></span>
<span class="line"><span style="color:#e1e4e8;">        int sum = x + y;</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(sum); // -2147483641</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// 解释</span></span>
<span class="line"><span style="color:#e1e4e8;">0111 1111 1111 1111 1111 1111 1111 1000</span></span>
<span class="line"><span style="color:#e1e4e8;">+ 0000 0000 0000 0000 0000 0000 0000 1111</span></span>
<span class="line"><span style="color:#e1e4e8;">-----------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">  1000 0000 0000 0000 0000 0000 0000 0111</span></span>
<span class="line"><span style="color:#e1e4e8;">由于最高位计算结果为1，因此，加法结果变成了一个负数。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        int x = 2147483640;</span></span>
<span class="line"><span style="color:#24292e;">        int y = 15;</span></span>
<span class="line"><span style="color:#24292e;">        int sum = x + y;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(sum); // -2147483641</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// 解释</span></span>
<span class="line"><span style="color:#24292e;">0111 1111 1111 1111 1111 1111 1111 1000</span></span>
<span class="line"><span style="color:#24292e;">+ 0000 0000 0000 0000 0000 0000 0000 1111</span></span>
<span class="line"><span style="color:#24292e;">-----------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">  1000 0000 0000 0000 0000 0000 0000 0111</span></span>
<span class="line"><span style="color:#24292e;">由于最高位计算结果为1，因此，加法结果变成了一个负数。</span></span></code></pre></div><h4 id="移位运算" tabindex="-1">移位运算 <a class="header-anchor" href="#移位运算" aria-label="Permalink to &quot;移位运算&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 左移</span></span>
<span class="line"><span style="color:#e1e4e8;">int n = 7;       // 00000000 00000000 00000000 00000111 = 7</span></span>
<span class="line"><span style="color:#e1e4e8;">int a = n &lt;&lt; 1;  // 00000000 00000000 00000000 00001110 = 14</span></span>
<span class="line"><span style="color:#e1e4e8;">int b = n &lt;&lt; 2;  // 00000000 00000000 00000000 00011100 = 28</span></span>
<span class="line"><span style="color:#e1e4e8;">int c = n &lt;&lt; 28; // 01110000 00000000 00000000 00000000 = 1879048192</span></span>
<span class="line"><span style="color:#e1e4e8;">int d = n &lt;&lt; 29; // 11100000 00000000 00000000 00000000 = -536870912</span></span>
<span class="line"><span style="color:#e1e4e8;">// 右移</span></span>
<span class="line"><span style="color:#e1e4e8;">int n = 7;       // 00000000 00000000 00000000 00000111 = 7</span></span>
<span class="line"><span style="color:#e1e4e8;">int a = n &gt;&gt; 1;  // 00000000 00000000 00000000 00000011 = 3</span></span>
<span class="line"><span style="color:#e1e4e8;">int b = n &gt;&gt; 2;  // 00000000 00000000 00000000 00000001 = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">int c = n &gt;&gt; 3;  // 00000000 00000000 00000000 00000000 = 0</span></span>
<span class="line"><span style="color:#e1e4e8;">// 负数右移</span></span>
<span class="line"><span style="color:#e1e4e8;">int n = -536870912;</span></span>
<span class="line"><span style="color:#e1e4e8;">int a = n &gt;&gt; 1;  // 11110000 00000000 00000000 00000000 = -268435456</span></span>
<span class="line"><span style="color:#e1e4e8;">int b = n &gt;&gt; 2;  // 11111000 00000000 00000000 00000000 = -134217728</span></span>
<span class="line"><span style="color:#e1e4e8;">int c = n &gt;&gt; 28; // 11111111 11111111 11111111 11111110 = -2</span></span>
<span class="line"><span style="color:#e1e4e8;">int d = n &gt;&gt; 29; // 11111111 11111111 11111111 11111111 = -1</span></span>
<span class="line"><span style="color:#e1e4e8;">// 无符号右移，不管符号位，右移后高位总是补0</span></span>
<span class="line"><span style="color:#e1e4e8;">int n = -536870912;</span></span>
<span class="line"><span style="color:#e1e4e8;">int a = n &gt;&gt;&gt; 1;  // 01110000 00000000 00000000 00000000 = 1879048192</span></span>
<span class="line"><span style="color:#e1e4e8;">int b = n &gt;&gt;&gt; 2;  // 00111000 00000000 00000000 00000000 = 939524096</span></span>
<span class="line"><span style="color:#e1e4e8;">int c = n &gt;&gt;&gt; 29; // 00000000 00000000 00000000 00000111 = 7</span></span>
<span class="line"><span style="color:#e1e4e8;">int d = n &gt;&gt;&gt; 31; // 00000000 00000000 00000000 00000001 = 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 左移</span></span>
<span class="line"><span style="color:#24292e;">int n = 7;       // 00000000 00000000 00000000 00000111 = 7</span></span>
<span class="line"><span style="color:#24292e;">int a = n &lt;&lt; 1;  // 00000000 00000000 00000000 00001110 = 14</span></span>
<span class="line"><span style="color:#24292e;">int b = n &lt;&lt; 2;  // 00000000 00000000 00000000 00011100 = 28</span></span>
<span class="line"><span style="color:#24292e;">int c = n &lt;&lt; 28; // 01110000 00000000 00000000 00000000 = 1879048192</span></span>
<span class="line"><span style="color:#24292e;">int d = n &lt;&lt; 29; // 11100000 00000000 00000000 00000000 = -536870912</span></span>
<span class="line"><span style="color:#24292e;">// 右移</span></span>
<span class="line"><span style="color:#24292e;">int n = 7;       // 00000000 00000000 00000000 00000111 = 7</span></span>
<span class="line"><span style="color:#24292e;">int a = n &gt;&gt; 1;  // 00000000 00000000 00000000 00000011 = 3</span></span>
<span class="line"><span style="color:#24292e;">int b = n &gt;&gt; 2;  // 00000000 00000000 00000000 00000001 = 1</span></span>
<span class="line"><span style="color:#24292e;">int c = n &gt;&gt; 3;  // 00000000 00000000 00000000 00000000 = 0</span></span>
<span class="line"><span style="color:#24292e;">// 负数右移</span></span>
<span class="line"><span style="color:#24292e;">int n = -536870912;</span></span>
<span class="line"><span style="color:#24292e;">int a = n &gt;&gt; 1;  // 11110000 00000000 00000000 00000000 = -268435456</span></span>
<span class="line"><span style="color:#24292e;">int b = n &gt;&gt; 2;  // 11111000 00000000 00000000 00000000 = -134217728</span></span>
<span class="line"><span style="color:#24292e;">int c = n &gt;&gt; 28; // 11111111 11111111 11111111 11111110 = -2</span></span>
<span class="line"><span style="color:#24292e;">int d = n &gt;&gt; 29; // 11111111 11111111 11111111 11111111 = -1</span></span>
<span class="line"><span style="color:#24292e;">// 无符号右移，不管符号位，右移后高位总是补0</span></span>
<span class="line"><span style="color:#24292e;">int n = -536870912;</span></span>
<span class="line"><span style="color:#24292e;">int a = n &gt;&gt;&gt; 1;  // 01110000 00000000 00000000 00000000 = 1879048192</span></span>
<span class="line"><span style="color:#24292e;">int b = n &gt;&gt;&gt; 2;  // 00111000 00000000 00000000 00000000 = 939524096</span></span>
<span class="line"><span style="color:#24292e;">int c = n &gt;&gt;&gt; 29; // 00000000 00000000 00000000 00000111 = 7</span></span>
<span class="line"><span style="color:#24292e;">int d = n &gt;&gt;&gt; 31; // 00000000 00000000 00000000 00000001 = 1</span></span></code></pre></div><p>对byte和short类型进行移位时，会首先转换为int再进行位移。 仔细观察可发现，左移实际上就是不断地×2，右移实际上就是不断地÷2。</p><h4 id="按位运算" tabindex="-1">按位运算 <a class="header-anchor" href="#按位运算" aria-label="Permalink to &quot;按位运算&quot;">​</a></h4><ul><li>按位与（&amp;）</li></ul><p>对应的位都为1，那么结果就是1， 如果任意一个位是0 则结果就是0。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 1的二进制表示为: 00000000 00000000 00000000 00000001</span></span>
<span class="line"><span style="color:#e1e4e8;">// 3的二进制表示为: 00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#e1e4e8;">// -----------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">// 1的二进制表示为: 00000000 00000000 00000000 00000001</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(1 &amp; 3)     // 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 1的二进制表示为: 00000000 00000000 00000000 00000001</span></span>
<span class="line"><span style="color:#24292e;">// 3的二进制表示为: 00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#24292e;">// -----------------------------</span></span>
<span class="line"><span style="color:#24292e;">// 1的二进制表示为: 00000000 00000000 00000000 00000001</span></span>
<span class="line"><span style="color:#24292e;">console.log(1 &amp; 3)     // 1</span></span></code></pre></div><ul><li>按位或（|）</li></ul><p>| 运算符跟 &amp; 的区别在于如果对应的位中任一个操作数为1 那么结果就是1。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 1的二进制表示为: 00000000 00000000 00000000 00000001</span></span>
<span class="line"><span style="color:#e1e4e8;">// 3的二进制表示为: 00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#e1e4e8;">// -----------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">// 3的二进制表示为: 00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(1 | 3)     // 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 1的二进制表示为: 00000000 00000000 00000000 00000001</span></span>
<span class="line"><span style="color:#24292e;">// 3的二进制表示为: 00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#24292e;">// -----------------------------</span></span>
<span class="line"><span style="color:#24292e;">// 3的二进制表示为: 00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#24292e;">console.log(1 | 3)     // 3</span></span></code></pre></div><ul><li>按位异或（^）</li></ul><p>^ 如果对应两个操作位有且仅有一个1时结果为1，其他都是0。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 1的二进制表示为: 00000000 00000000 00000000 00000001</span></span>
<span class="line"><span style="color:#e1e4e8;">// 3的二进制表示为: 00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#e1e4e8;">// -----------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">// 2的二进制表示为: 00000000 00000000 00000000 00000010</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(1 ^ 3)     // 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 1的二进制表示为: 00000000 00000000 00000000 00000001</span></span>
<span class="line"><span style="color:#24292e;">// 3的二进制表示为: 00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#24292e;">// -----------------------------</span></span>
<span class="line"><span style="color:#24292e;">// 2的二进制表示为: 00000000 00000000 00000000 00000010</span></span>
<span class="line"><span style="color:#24292e;">console.log(1 ^ 3)     // 2</span></span></code></pre></div><ul><li>按位非</li></ul><p>~ 运算符是对位求反，1变0, 0变1，也就是求二进制的反码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 1的二进制表示为: 00000000 00000000 00000000 00000001</span></span>
<span class="line"><span style="color:#e1e4e8;">// 3的二进制表示为: 00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#e1e4e8;">// -----------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">// 1反码二进制表示: 11111111 11111111 11111111 11111110</span></span>
<span class="line"><span style="color:#e1e4e8;">// 由于第一位（符号位）是1，所以这个数是一个负数。JavaScript 内部采用补码形式表示负数，即需要将这个数减去1，再取一次反，然后加上负号，才能得到这个负数对应的10进制值。</span></span>
<span class="line"><span style="color:#e1e4e8;">// -----------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">// 1的反码减1：     11111111 11111111 11111111 11111101</span></span>
<span class="line"><span style="color:#e1e4e8;">// 反码取反：       00000000 00000000 00000000 00000010</span></span>
<span class="line"><span style="color:#e1e4e8;">// 表示为10进制加负号：-2</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(~ 1)     // -2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 1的二进制表示为: 00000000 00000000 00000000 00000001</span></span>
<span class="line"><span style="color:#24292e;">// 3的二进制表示为: 00000000 00000000 00000000 00000011</span></span>
<span class="line"><span style="color:#24292e;">// -----------------------------</span></span>
<span class="line"><span style="color:#24292e;">// 1反码二进制表示: 11111111 11111111 11111111 11111110</span></span>
<span class="line"><span style="color:#24292e;">// 由于第一位（符号位）是1，所以这个数是一个负数。JavaScript 内部采用补码形式表示负数，即需要将这个数减去1，再取一次反，然后加上负号，才能得到这个负数对应的10进制值。</span></span>
<span class="line"><span style="color:#24292e;">// -----------------------------</span></span>
<span class="line"><span style="color:#24292e;">// 1的反码减1：     11111111 11111111 11111111 11111101</span></span>
<span class="line"><span style="color:#24292e;">// 反码取反：       00000000 00000000 00000000 00000010</span></span>
<span class="line"><span style="color:#24292e;">// 表示为10进制加负号：-2</span></span>
<span class="line"><span style="color:#24292e;">console.log(~ 1)     // -2</span></span></code></pre></div><h4 id="运算优先级" tabindex="-1">运算优先级 <a class="header-anchor" href="#运算优先级" aria-label="Permalink to &quot;运算优先级&quot;">​</a></h4><ul><li>()</li><li>! ~ ++ --</li><li><ul><li>/ %</li></ul></li><li><ul><li><ul><li></li></ul></li></ul></li><li>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</li><li>&amp;</li><li>|</li><li>+= -= *= /=</li></ul><h4 id="类型自动提升与强制转型" tabindex="-1">类型自动提升与强制转型 <a class="header-anchor" href="#类型自动提升与强制转型" aria-label="Permalink to &quot;类型自动提升与强制转型&quot;">​</a></h4><p>在运算过程中，如果参与运算的两个数类型不一致，那么计算结果为<strong>较大类型的整型</strong>。例如，short和int计算。 强制转型使用(类型)，<strong>超出范围的强制转型会得到错误的结果</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 强制转换</span></span>
<span class="line"><span style="color:#e1e4e8;">int i = 12345;</span></span>
<span class="line"><span style="color:#e1e4e8;">short s = (short) i; // 12345</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 强制转换</span></span>
<span class="line"><span style="color:#24292e;">int i = 12345;</span></span>
<span class="line"><span style="color:#24292e;">short s = (short) i; // 12345</span></span></code></pre></div><h3 id="_1-4-浮点数" tabindex="-1">1.4 浮点数 <a class="header-anchor" href="#_1-4-浮点数" aria-label="Permalink to &quot;1.4 浮点数&quot;">​</a></h3><p>浮点数运算和整数运算相比，只能进行加减乘除这些数值计算，<strong>不能做位运算和移位运算</strong>，<strong>浮点数常常无法精确表示。</strong></p><h4 id="类型提升" tabindex="-1">类型提升 <a class="header-anchor" href="#类型提升" aria-label="Permalink to &quot;类型提升&quot;">​</a></h4><p>如果参与运算的两个数其中一个是整型，那么整型可以自动<strong>提升到浮点型</strong> 注意，在一个复杂的四则运算中，<strong>两个整数的运算</strong>不会出现自动提升的情况</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">double d = 1.2 + 24 / 5; // 5.2   原因24/5等于4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">double d = 1.2 + 24 / 5; // 5.2   原因24/5等于4</span></span></code></pre></div><h4 id="强制转型" tabindex="-1">强制转型 <a class="header-anchor" href="#强制转型" aria-label="Permalink to &quot;强制转型&quot;">​</a></h4><p>转型时，浮点数的小数部分会被丢掉</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">int n2 = (int) 12.7; // 12</span></span>
<span class="line"><span style="color:#e1e4e8;">int n2 = (int) -12.7; // -12</span></span>
<span class="line"><span style="color:#e1e4e8;">int n3 = (int) (12.7 + 0.5); // 13</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">int n2 = (int) 12.7; // 12</span></span>
<span class="line"><span style="color:#24292e;">int n2 = (int) -12.7; // -12</span></span>
<span class="line"><span style="color:#24292e;">int n3 = (int) (12.7 + 0.5); // 13</span></span></code></pre></div><h3 id="_1-5-字符和字符串" tabindex="-1">1.5 字符和字符串 <a class="header-anchor" href="#_1-5-字符和字符串" aria-label="Permalink to &quot;1.5 字符和字符串&quot;">​</a></h3><p>字符类型char是基本数据类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">int n1 = &#39;A&#39;; // 字母“A”的Unicodde编码是65</span></span>
<span class="line"><span style="color:#e1e4e8;">int n2 = &#39;中&#39;; // 汉字“中”的Unicode编码是20013</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">int n1 = &#39;A&#39;; // 字母“A”的Unicodde编码是65</span></span>
<span class="line"><span style="color:#24292e;">int n2 = &#39;中&#39;; // 汉字“中”的Unicode编码是20013</span></span></code></pre></div><h4 id="字符串类型" tabindex="-1">字符串类型 <a class="header-anchor" href="#字符串类型" aria-label="Permalink to &quot;字符串类型&quot;">​</a></h4><p>字符串类型String是引用类型，使用<code>“”</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">String s = &quot;&quot;; // 空字符串，包含0个字符</span></span>
<span class="line"><span style="color:#e1e4e8;">String s1 = &quot;A&quot;; // 包含一个字符</span></span>
<span class="line"><span style="color:#e1e4e8;">String s = &quot;abc\\&quot;xyz&quot;; // 包含7个字符: a, b, c, &quot;, x, y, z,使用转义字符\\</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">String s = &quot;&quot;; // 空字符串，包含0个字符</span></span>
<span class="line"><span style="color:#24292e;">String s1 = &quot;A&quot;; // 包含一个字符</span></span>
<span class="line"><span style="color:#24292e;">String s = &quot;abc\\&quot;xyz&quot;; // 包含7个字符: a, b, c, &quot;, x, y, z,使用转义字符\\</span></span></code></pre></div><h4 id="字符串连接" tabindex="-1">字符串连接 <a class="header-anchor" href="#字符串连接" aria-label="Permalink to &quot;字符串连接&quot;">​</a></h4><p>使用<code>+</code>连接任意字符串和其他数据类型，用<code>+</code>连接字符串和其他数据类型，会将其他数据类型先自动转型为字符串。</p><h4 id="多行字符串" tabindex="-1">多行字符串 <a class="header-anchor" href="#多行字符串" aria-label="Permalink to &quot;多行字符串&quot;">​</a></h4><p>字符串可以用<code>&quot;&quot;&quot;...&quot;&quot;&quot;</code>表示多行字符串。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String s = &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                   SELECT * FROM</span></span>
<span class="line"><span style="color:#e1e4e8;">                     users</span></span>
<span class="line"><span style="color:#e1e4e8;">                   WHERE id &gt; 100</span></span>
<span class="line"><span style="color:#e1e4e8;">                   ORDER BY name DESC</span></span>
<span class="line"><span style="color:#e1e4e8;">                   &quot;&quot;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(s);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        String s = &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">                   SELECT * FROM</span></span>
<span class="line"><span style="color:#24292e;">                     users</span></span>
<span class="line"><span style="color:#24292e;">                   WHERE id &gt; 100</span></span>
<span class="line"><span style="color:#24292e;">                   ORDER BY name DESC</span></span>
<span class="line"><span style="color:#24292e;">                   &quot;&quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(s);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="不可变特性" tabindex="-1">不可变特性 <a class="header-anchor" href="#不可变特性" aria-label="Permalink to &quot;不可变特性&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String s = &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(s); // 显示 hello</span></span>
<span class="line"><span style="color:#e1e4e8;">        s = &quot;world&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(s); // 显示 world</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        String s = &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(s); // 显示 hello</span></span>
<span class="line"><span style="color:#24292e;">        s = &quot;world&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(s); // 显示 world</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>执行String s = &quot;hello&quot;;时，JVM虚拟机先创建字符串&quot;hello&quot;，然后，把字符串变量s指向它：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">      s</span></span>
<span class="line"><span style="color:#e1e4e8;">      │</span></span>
<span class="line"><span style="color:#e1e4e8;">      ▼</span></span>
<span class="line"><span style="color:#e1e4e8;">┌───┬───────────┬───┐</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │  &quot;hello&quot;  │   │</span></span>
<span class="line"><span style="color:#e1e4e8;">└───┴───────────┴───┘</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">      s</span></span>
<span class="line"><span style="color:#24292e;">      │</span></span>
<span class="line"><span style="color:#24292e;">      ▼</span></span>
<span class="line"><span style="color:#24292e;">┌───┬───────────┬───┐</span></span>
<span class="line"><span style="color:#24292e;">│   │  &quot;hello&quot;  │   │</span></span>
<span class="line"><span style="color:#24292e;">└───┴───────────┴───┘</span></span></code></pre></div><p>紧接着，执行s = &quot;world&quot;;时，JVM虚拟机先创建字符串&quot;world&quot;，然后，把字符串变量s指向它：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">      s ──────────────┐</span></span>
<span class="line"><span style="color:#e1e4e8;">                      │</span></span>
<span class="line"><span style="color:#e1e4e8;">                      ▼</span></span>
<span class="line"><span style="color:#e1e4e8;">┌───┬───────────┬───┬───────────┬───┐</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │  &quot;hello&quot;  │   │  &quot;world&quot;  │   │</span></span>
<span class="line"><span style="color:#e1e4e8;">└───┴───────────┴───┴───────────┴───┘</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">      s ──────────────┐</span></span>
<span class="line"><span style="color:#24292e;">                      │</span></span>
<span class="line"><span style="color:#24292e;">                      ▼</span></span>
<span class="line"><span style="color:#24292e;">┌───┬───────────┬───┬───────────┬───┐</span></span>
<span class="line"><span style="color:#24292e;">│   │  &quot;hello&quot;  │   │  &quot;world&quot;  │   │</span></span>
<span class="line"><span style="color:#24292e;">└───┴───────────┴───┴───────────┴───┘</span></span></code></pre></div><p>原来的字符串&quot;hello&quot;还在，只是我们无法通过变量s访问它而已。因此，字符串的不可变是指字符串内容不可变。至于变量，可以一会指向字符串&quot;hello&quot;，一会指向字符串&quot;world&quot;。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String s = &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        String t = s;</span></span>
<span class="line"><span style="color:#e1e4e8;">        s = &quot;world&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(t); // t是&quot;hello&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        String s = &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        String t = s;</span></span>
<span class="line"><span style="color:#24292e;">        s = &quot;world&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(t); // t是&quot;hello&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>引用类型的变量可以指向一个空值<strong>null</strong>，它表示不存在，即该变量不指向任何对象。</p><h3 id="_1-6-数组类型" tabindex="-1">1.6 数组类型 <a class="header-anchor" href="#_1-6-数组类型" aria-label="Permalink to &quot;1.6 数组类型&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 5位同学的成绩:</span></span>
<span class="line"><span style="color:#e1e4e8;">        int[] ns = new int[5];</span></span>
<span class="line"><span style="color:#e1e4e8;">        ns[0] = 68;</span></span>
<span class="line"><span style="color:#e1e4e8;">        ns[1] = 79;</span></span>
<span class="line"><span style="color:#e1e4e8;">        ns[2] = 91;</span></span>
<span class="line"><span style="color:#e1e4e8;">        ns[3] = 85;</span></span>
<span class="line"><span style="color:#e1e4e8;">        ns[4] = 62;</span></span>
<span class="line"><span style="color:#e1e4e8;">				System.out.println(ns.length);</span></span>
<span class="line"><span style="color:#e1e4e8;">      	// 直接定义数组</span></span>
<span class="line"><span style="color:#e1e4e8;">				int[] ns = new int[] { 68, 79, 91, 85, 62 };</span></span>
<span class="line"><span style="color:#e1e4e8;">      	// 简写</span></span>
<span class="line"><span style="color:#e1e4e8;">      	int[] ns = { 68, 79, 91, 85, 62 };</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        // 5位同学的成绩:</span></span>
<span class="line"><span style="color:#24292e;">        int[] ns = new int[5];</span></span>
<span class="line"><span style="color:#24292e;">        ns[0] = 68;</span></span>
<span class="line"><span style="color:#24292e;">        ns[1] = 79;</span></span>
<span class="line"><span style="color:#24292e;">        ns[2] = 91;</span></span>
<span class="line"><span style="color:#24292e;">        ns[3] = 85;</span></span>
<span class="line"><span style="color:#24292e;">        ns[4] = 62;</span></span>
<span class="line"><span style="color:#24292e;">				System.out.println(ns.length);</span></span>
<span class="line"><span style="color:#24292e;">      	// 直接定义数组</span></span>
<span class="line"><span style="color:#24292e;">				int[] ns = new int[] { 68, 79, 91, 85, 62 };</span></span>
<span class="line"><span style="color:#24292e;">      	// 简写</span></span>
<span class="line"><span style="color:#24292e;">      	int[] ns = { 68, 79, 91, 85, 62 };</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>定义一个数组类型的变量，使用数组类型“类型[]”。 特点</p><ul><li>数组所有元素初始化为默认值，整型都是0，浮点型是0.0，布尔型是false；</li><li>数组一旦创建后，大小就不可改变。</li><li>索引超出范围，运行时将报错。</li></ul><h4 id="引用类型数组" tabindex="-1">引用类型数组 <a class="header-anchor" href="#引用类型数组" aria-label="Permalink to &quot;引用类型数组&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">String[] names = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;ABC&quot;, &quot;XYZ&quot;, &quot;zoo&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">String[] names = {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;ABC&quot;, &quot;XYZ&quot;, &quot;zoo&quot;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>对于String[]类型的数组变量names，它实际上包含3个元素，但每个元素都指向某个字符串对象：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">          ┌─────────────────────────┐</span></span>
<span class="line"><span style="color:#e1e4e8;">    names │   ┌─────────────────────┼───────────┐</span></span>
<span class="line"><span style="color:#e1e4e8;">      │   │   │                     │           │</span></span>
<span class="line"><span style="color:#e1e4e8;">      ▼   │   │                     ▼           ▼</span></span>
<span class="line"><span style="color:#e1e4e8;">┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┐</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │░░░│░░░│░░░│   │ &quot;ABC&quot; │   │ &quot;XYZ&quot; │   │ &quot;zoo&quot; │   │</span></span>
<span class="line"><span style="color:#e1e4e8;">└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┘</span></span>
<span class="line"><span style="color:#e1e4e8;">      │                 ▲</span></span>
<span class="line"><span style="color:#e1e4e8;">      └─────────────────┘</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">          ┌─────────────────────────┐</span></span>
<span class="line"><span style="color:#24292e;">    names │   ┌─────────────────────┼───────────┐</span></span>
<span class="line"><span style="color:#24292e;">      │   │   │                     │           │</span></span>
<span class="line"><span style="color:#24292e;">      ▼   │   │                     ▼           ▼</span></span>
<span class="line"><span style="color:#24292e;">┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┐</span></span>
<span class="line"><span style="color:#24292e;">│   │░░░│░░░│░░░│   │ &quot;ABC&quot; │   │ &quot;XYZ&quot; │   │ &quot;zoo&quot; │   │</span></span>
<span class="line"><span style="color:#24292e;">└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┘</span></span>
<span class="line"><span style="color:#24292e;">      │                 ▲</span></span>
<span class="line"><span style="color:#24292e;">      └─────────────────┘</span></span></code></pre></div><p>对names[1]进行赋值，例如names[1] = &quot;cat&quot;;，效果如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">          ┌─────────────────────────────────────────────────┐</span></span>
<span class="line"><span style="color:#e1e4e8;">    names │   ┌─────────────────────────────────┐           │</span></span>
<span class="line"><span style="color:#e1e4e8;">      │   │   │                                 │           │</span></span>
<span class="line"><span style="color:#e1e4e8;">      ▼   │   │                                 ▼           ▼</span></span>
<span class="line"><span style="color:#e1e4e8;">┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┬───────┬───┐</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │░░░│░░░│░░░│   │ &quot;ABC&quot; │   │ &quot;XYZ&quot; │   │ &quot;zoo&quot; │   │ &quot;cat&quot; │   │</span></span>
<span class="line"><span style="color:#e1e4e8;">└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┴───────┴───┘</span></span>
<span class="line"><span style="color:#e1e4e8;">      │                 ▲</span></span>
<span class="line"><span style="color:#e1e4e8;">      └─────────────────┘</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">          ┌─────────────────────────────────────────────────┐</span></span>
<span class="line"><span style="color:#24292e;">    names │   ┌─────────────────────────────────┐           │</span></span>
<span class="line"><span style="color:#24292e;">      │   │   │                                 │           │</span></span>
<span class="line"><span style="color:#24292e;">      ▼   │   │                                 ▼           ▼</span></span>
<span class="line"><span style="color:#24292e;">┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┬───────┬───┐</span></span>
<span class="line"><span style="color:#24292e;">│   │░░░│░░░│░░░│   │ &quot;ABC&quot; │   │ &quot;XYZ&quot; │   │ &quot;zoo&quot; │   │ &quot;cat&quot; │   │</span></span>
<span class="line"><span style="color:#24292e;">└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┴───────┴───┘</span></span>
<span class="line"><span style="color:#24292e;">      │                 ▲</span></span>
<span class="line"><span style="color:#24292e;">      └─────────────────┘</span></span></code></pre></div><p>这里注意到原来names[1]指向的字符串&quot;XYZ&quot;并没有改变，仅仅是将names[1]的引用从指向&quot;XYZ&quot;改成了指向&quot;cat&quot;，其结果是字符串&quot;XYZ&quot;再也无法通过names[1]访问到了。</p><h3 id="_1-7-输入和输出" tabindex="-1">1.7 输入和输出 <a class="header-anchor" href="#_1-7-输入和输出" aria-label="Permalink to &quot;1.7 输入和输出&quot;">​</a></h3><p><code>println</code>是print line的缩写，表示输出并换行，否则用print()。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 格式化输出</span></span>
<span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        double d = 3.1415926;</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.printf(&quot;%.2f\\n&quot;, d); // 显示两位小数3.14</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.printf(&quot;%.4f\\n&quot;, d); // 显示4位小数3.1416</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 格式化输出</span></span>
<span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        double d = 3.1415926;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.printf(&quot;%.2f\\n&quot;, d); // 显示两位小数3.14</span></span>
<span class="line"><span style="color:#24292e;">        System.out.printf(&quot;%.4f\\n&quot;, d); // 显示4位小数3.1416</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><table><thead><tr><th>占位符</th><th>说明</th></tr></thead><tbody><tr><td>%d</td><td>格式化输出整数</td></tr><tr><td>%x</td><td>格式化输出十六进制整数</td></tr><tr><td>%f</td><td>格式化输出浮点数</td></tr><tr><td>%e</td><td>格式化输出科学计数法表示的浮点数</td></tr><tr><td>%s</td><td>格式化字符串</td></tr></tbody></table><h4 id="输入" tabindex="-1">输入 <a class="header-anchor" href="#输入" aria-label="Permalink to &quot;输入&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import java.util.Scanner; // 导入工具库</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Scanner scanner = new Scanner(System.in); // 创建Scanner对象</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.print(&quot;Input your name: &quot;); // 打印提示</span></span>
<span class="line"><span style="color:#e1e4e8;">        String name = scanner.nextLine(); // 读取一行输入并获取字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.print(&quot;Input your age: &quot;); // 打印提示</span></span>
<span class="line"><span style="color:#e1e4e8;">        int age = scanner.nextInt(); // 读取一行输入并获取整数</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.printf(&quot;Hi, %s, you are %d\\n&quot;, name, age); // 格式化输出</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import java.util.Scanner; // 导入工具库</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Scanner scanner = new Scanner(System.in); // 创建Scanner对象</span></span>
<span class="line"><span style="color:#24292e;">        System.out.print(&quot;Input your name: &quot;); // 打印提示</span></span>
<span class="line"><span style="color:#24292e;">        String name = scanner.nextLine(); // 读取一行输入并获取字符串</span></span>
<span class="line"><span style="color:#24292e;">        System.out.print(&quot;Input your age: &quot;); // 打印提示</span></span>
<span class="line"><span style="color:#24292e;">        int age = scanner.nextInt(); // 读取一行输入并获取整数</span></span>
<span class="line"><span style="color:#24292e;">        System.out.printf(&quot;Hi, %s, you are %d\\n&quot;, name, age); // 格式化输出</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>直接使用System.in读取用户输入虽然是可以的，但需要更复杂的代码，而通过Scanner就可以简化后续的代码。</p><h3 id="_1-8-if-判断" tabindex="-1">1.8 if 判断 <a class="header-anchor" href="#_1-8-if-判断" aria-label="Permalink to &quot;1.8 if 判断&quot;">​</a></h3><p>这块大部分语言都差不多。</p><h4 id="浮点数比较" tabindex="-1">浮点数比较 <a class="header-anchor" href="#浮点数比较" aria-label="Permalink to &quot;浮点数比较&quot;">​</a></h4><p>浮点数在计算机中常常无法精确表示，并且计算可能出现误差，正确的方法是利用差值小于某个临界值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        double x = 1 - 9.0 / 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (Math.abs(x - 0.1) &lt; 0.00001) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;x is 0.1&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;x is NOT 0.1&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        double x = 1 - 9.0 / 10;</span></span>
<span class="line"><span style="color:#24292e;">        if (Math.abs(x - 0.1) &lt; 0.00001) {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;x is 0.1&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;x is NOT 0.1&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="引用类型比较" tabindex="-1">引用类型比较 <a class="header-anchor" href="#引用类型比较" aria-label="Permalink to &quot;引用类型比较&quot;">​</a></h4><p>使用<code>==</code>不能比较引用类型，需要使用<code>equals</code>方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String s1 = &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        String s2 = &quot;HELLO&quot;.toLowerCase();</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(s1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(s2);</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (s1.equals(s2)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;s1 equals s2&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;s1 not equals s2&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        String s1 = &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        String s2 = &quot;HELLO&quot;.toLowerCase();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(s1);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(s2);</span></span>
<span class="line"><span style="color:#24292e;">        if (s1.equals(s2)) {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;s1 equals s2&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;s1 not equals s2&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>注意，如果s1为null，则会报错，可以使用</strong><code>**&amp;&amp;**</code><strong>短路操作避免。</strong></p><h3 id="_1-9-switch-判断" tabindex="-1">1.9 switch 判断 <a class="header-anchor" href="#_1-9-switch-判断" aria-label="Permalink to &quot;1.9 switch 判断&quot;">​</a></h3><p>switch与其他语言也无大区别。 使用switch时，如果<strong>遗漏了break</strong>，就会造成严重的逻辑错误，从Java 12开始，switch语句升级为更简洁的表达式语法，使用类似模式匹配（Pattern Matching）的方法，保证只有一种路径会被执行，并且<strong>不需要break语句</strong>，<strong>多条语句，需要用{}括起来，<strong>还可以</strong>直接返回值。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String fruit = &quot;apple&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        switch (fruit) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        case &quot;apple&quot; -&gt; System.out.println(&quot;Selected apple&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        case &quot;pear&quot; -&gt; System.out.println(&quot;Selected pear&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        case &quot;mango&quot; -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;Selected mango&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;Good choice!&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">				case &quot;apple&quot; -&gt; 1; // 这是直接返回值</span></span>
<span class="line"><span style="color:#e1e4e8;">        default -&gt; System.out.println(&quot;No fruit selected&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        String fruit = &quot;apple&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        switch (fruit) {</span></span>
<span class="line"><span style="color:#24292e;">        case &quot;apple&quot; -&gt; System.out.println(&quot;Selected apple&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        case &quot;pear&quot; -&gt; System.out.println(&quot;Selected pear&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        case &quot;mango&quot; -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;Selected mango&quot;);</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;Good choice!&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">				case &quot;apple&quot; -&gt; 1; // 这是直接返回值</span></span>
<span class="line"><span style="color:#24292e;">        default -&gt; System.out.println(&quot;No fruit selected&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>如果需要复杂的语句，我们也可以写很多语句，放到{...}里，然后，用yield返回一个值作为switch语句的返回值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String fruit = &quot;orange&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        int opt = switch (fruit) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            case &quot;apple&quot; -&gt; 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            case &quot;pear&quot;, &quot;mango&quot; -&gt; 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">            default -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                int code = fruit.hashCode();</span></span>
<span class="line"><span style="color:#e1e4e8;">                yield code; // switch语句返回值</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        };</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;opt = &quot; + opt);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        String fruit = &quot;orange&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        int opt = switch (fruit) {</span></span>
<span class="line"><span style="color:#24292e;">            case &quot;apple&quot; -&gt; 1;</span></span>
<span class="line"><span style="color:#24292e;">            case &quot;pear&quot;, &quot;mango&quot; -&gt; 2;</span></span>
<span class="line"><span style="color:#24292e;">            default -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                int code = fruit.hashCode();</span></span>
<span class="line"><span style="color:#24292e;">                yield code; // switch语句返回值</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        };</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;opt = &quot; + opt);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_2-0-for循环" tabindex="-1">2.0 for循环 <a class="header-anchor" href="#_2-0-for循环" aria-label="Permalink to &quot;2.0 for循环&quot;">​</a></h3><h4 id="for-each循环" tabindex="-1">for each循环 <a class="header-anchor" href="#for-each循环" aria-label="Permalink to &quot;for each循环&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Main</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] ns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> ns) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(n);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] ns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> ns) {</span></span>
<span class="line"><span style="color:#24292E;">            System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(n);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>访问的是数组每个元素的值</p><h3 id="_2-1-数组遍历" tabindex="-1">2.1 数组遍历 <a class="header-anchor" href="#_2-1-数组遍历" aria-label="Permalink to &quot;2.1 数组遍历&quot;">​</a></h3><h4 id="打印数组内容" tabindex="-1">打印数组内容 <a class="header-anchor" href="#打印数组内容" aria-label="Permalink to &quot;打印数组内容&quot;">​</a></h4><p>直接打印数组变量，得到的是数组在JVM中的引用地址，类似 [I@7852e922，使用Arrays.toString(ns)</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.util.Arrays;</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Main</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] ns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 这样可以打印出数组</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(Arrays.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(ns));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.util.Arrays;</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] ns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 这样可以打印出数组</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(Arrays.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">(ns));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_2-2-数组排序" tabindex="-1">2.2 数组排序 <a class="header-anchor" href="#_2-2-数组排序" aria-label="Permalink to &quot;2.2 数组排序&quot;">​</a></h3><p>使用Arrays.sort()对数组进行排序，数组排序实际上修改了数组本身，在内存中的顺序会发生变化。</p><h3 id="_2-3-多维数组" tabindex="-1">2.3 多维数组 <a class="header-anchor" href="#_2-3-多维数组" aria-label="Permalink to &quot;2.3 多维数组&quot;">​</a></h3><p>Arrays.deepToString()，可以打印出多维数组。</p><h2 id="二、面向对象编程" tabindex="-1">二、面向对象编程 <a class="header-anchor" href="#二、面向对象编程" aria-label="Permalink to &quot;二、面向对象编程&quot;">​</a></h2><h3 id="_2-1-概念" tabindex="-1">2.1 概念 <a class="header-anchor" href="#_2-1-概念" aria-label="Permalink to &quot;2.1 概念&quot;">​</a></h3><p>class是一种对象模版，它定义了如何创建实例，instance是对象实例，instance是根据class创建的实例。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 创建类</span></span>
<span class="line"><span style="color:#e1e4e8;">class Person {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public String name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public int age;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// 创建实例	</span></span>
<span class="line"><span style="color:#e1e4e8;">Person ming = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">// 创建不同的实例</span></span>
<span class="line"><span style="color:#e1e4e8;">ming.name = &quot;Xiao Ming&quot;; // 对字段name赋值</span></span>
<span class="line"><span style="color:#e1e4e8;">ming.age = 12; // 对字段age赋值</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(ming.name); // 访问字段name</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Person hong = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">hong.name = &quot;Xiao Hong&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">hong.age = 15;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 创建类</span></span>
<span class="line"><span style="color:#24292e;">class Person {</span></span>
<span class="line"><span style="color:#24292e;">    public String name;</span></span>
<span class="line"><span style="color:#24292e;">    public int age;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// 创建实例	</span></span>
<span class="line"><span style="color:#24292e;">Person ming = new Person();</span></span>
<span class="line"><span style="color:#24292e;">// 创建不同的实例</span></span>
<span class="line"><span style="color:#24292e;">ming.name = &quot;Xiao Ming&quot;; // 对字段name赋值</span></span>
<span class="line"><span style="color:#24292e;">ming.age = 12; // 对字段age赋值</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(ming.name); // 访问字段name</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Person hong = new Person();</span></span>
<span class="line"><span style="color:#24292e;">hong.name = &quot;Xiao Hong&quot;;</span></span>
<span class="line"><span style="color:#24292e;">hong.age = 15;</span></span></code></pre></div><h3 id="_2-2-方法" tabindex="-1">2.2 方法 <a class="header-anchor" href="#_2-2-方法" aria-label="Permalink to &quot;2.2 方法&quot;">​</a></h3><p>直接把<code>field</code>用<code>public</code>暴露给外部可能会破坏封装性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Person {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public String name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public int age;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Person ming = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">ming.name = &quot;Xiao Ming&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">ming.age = -99; // age设置为负数</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Person {</span></span>
<span class="line"><span style="color:#24292e;">    public String name;</span></span>
<span class="line"><span style="color:#24292e;">    public int age;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Person ming = new Person();</span></span>
<span class="line"><span style="color:#24292e;">ming.name = &quot;Xiao Ming&quot;;</span></span>
<span class="line"><span style="color:#24292e;">ming.age = -99; // age设置为负数</span></span></code></pre></div><p>用<code>private</code>修饰<code>field</code>，直接修改这会报错。 那么如何修改呢，可以<strong>使用方法来修改</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Person ming = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">        ming.setName(&quot;Xiao Ming&quot;); // 设置name</span></span>
<span class="line"><span style="color:#e1e4e8;">        ming.setAge(12); // 设置age</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(ming.getName() + &quot;, &quot; + ming.getAge());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">class Person {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private String name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int age;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public String getName() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return this.name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void setName(String name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.name = name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    public int getAge() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return this.age;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void setAge(int age) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (age &lt; 0 || age &gt; 100) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            throw new IllegalArgumentException(&quot;invalid age value&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.age = age;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Person ming = new Person();</span></span>
<span class="line"><span style="color:#24292e;">        ming.setName(&quot;Xiao Ming&quot;); // 设置name</span></span>
<span class="line"><span style="color:#24292e;">        ming.setAge(12); // 设置age</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(ming.getName() + &quot;, &quot; + ming.getAge());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">class Person {</span></span>
<span class="line"><span style="color:#24292e;">    private String name;</span></span>
<span class="line"><span style="color:#24292e;">    private int age;</span></span>
<span class="line"><span style="color:#24292e;">    public String getName() {</span></span>
<span class="line"><span style="color:#24292e;">        return this.name;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    public void setName(String name) {</span></span>
<span class="line"><span style="color:#24292e;">        this.name = name;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    public int getAge() {</span></span>
<span class="line"><span style="color:#24292e;">        return this.age;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    public void setAge(int age) {</span></span>
<span class="line"><span style="color:#24292e;">        if (age &lt; 0 || age &gt; 100) {</span></span>
<span class="line"><span style="color:#24292e;">            throw new IllegalArgumentException(&quot;invalid age value&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        this.age = age;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><code>private</code> 方法也不允许外部调用，那么<code>private</code>的意义就是<strong>内部调用</strong>。</p><h4 id="可变参数" tabindex="-1">可变参数 <a class="header-anchor" href="#可变参数" aria-label="Permalink to &quot;可变参数&quot;">​</a></h4><p>使用<code>类型...</code>可以定义可变参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Group {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private String[] names;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void setNames(String... names) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.names = names;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Group g = new Group();</span></span>
<span class="line"><span style="color:#e1e4e8;">g.setNames(&quot;Xiao Ming&quot;, &quot;Xiao Hong&quot;, &quot;Xiao Jun&quot;); // 传入3个String</span></span>
<span class="line"><span style="color:#e1e4e8;">g.setNames(&quot;Xiao Ming&quot;, &quot;Xiao Hong&quot;); // 传入2个String</span></span>
<span class="line"><span style="color:#e1e4e8;">g.setNames(&quot;Xiao Ming&quot;); // 传入1个String</span></span>
<span class="line"><span style="color:#e1e4e8;">g.setNames();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Group {</span></span>
<span class="line"><span style="color:#24292e;">    private String[] names;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setNames(String... names) {</span></span>
<span class="line"><span style="color:#24292e;">        this.names = names;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Group g = new Group();</span></span>
<span class="line"><span style="color:#24292e;">g.setNames(&quot;Xiao Ming&quot;, &quot;Xiao Hong&quot;, &quot;Xiao Jun&quot;); // 传入3个String</span></span>
<span class="line"><span style="color:#24292e;">g.setNames(&quot;Xiao Ming&quot;, &quot;Xiao Hong&quot;); // 传入2个String</span></span>
<span class="line"><span style="color:#24292e;">g.setNames(&quot;Xiao Ming&quot;); // 传入1个String</span></span>
<span class="line"><span style="color:#24292e;">g.setNames();</span></span></code></pre></div><h4 id="参数绑定" tabindex="-1">参数绑定 <a class="header-anchor" href="#参数绑定" aria-label="Permalink to &quot;参数绑定&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Person p = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">        int n = 15; // n的值为15</span></span>
<span class="line"><span style="color:#e1e4e8;">        p.setAge(n); // 传入n的值</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(p.getAge()); // 15</span></span>
<span class="line"><span style="color:#e1e4e8;">        n = 20; // n的值改为20</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(p.getAge()); // 返回15</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Person {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int age;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public int getAge() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return this.age;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void setAge(int age) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.age = age;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Person p = new Person();</span></span>
<span class="line"><span style="color:#24292e;">        int n = 15; // n的值为15</span></span>
<span class="line"><span style="color:#24292e;">        p.setAge(n); // 传入n的值</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(p.getAge()); // 15</span></span>
<span class="line"><span style="color:#24292e;">        n = 20; // n的值改为20</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(p.getAge()); // 返回15</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Person {</span></span>
<span class="line"><span style="color:#24292e;">    private int age;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public int getAge() {</span></span>
<span class="line"><span style="color:#24292e;">        return this.age;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setAge(int age) {</span></span>
<span class="line"><span style="color:#24292e;">        this.age = age;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>基本类型参数的传递，是调用方值的复制。双方各自的后续修改，互不影响。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Person p = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">        String[] fullname = new String[] { &quot;Homer&quot;, &quot;Simpson&quot; };</span></span>
<span class="line"><span style="color:#e1e4e8;">        p.setName(fullname); // 传入fullname数组</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(p.getName()); // &quot;Homer Simpson&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        fullname[0] = &quot;Bart&quot;; // fullname数组的第一个元素修改为&quot;Bart&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(p.getName()); // &quot;Homer Simpson&quot;还是&quot;Bart Simpson&quot;?</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Person {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private String[] name;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public String getName() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return this.name[0] + &quot; &quot; + this.name[1];</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void setName(String[] name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.name = name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Person p = new Person();</span></span>
<span class="line"><span style="color:#24292e;">        String[] fullname = new String[] { &quot;Homer&quot;, &quot;Simpson&quot; };</span></span>
<span class="line"><span style="color:#24292e;">        p.setName(fullname); // 传入fullname数组</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(p.getName()); // &quot;Homer Simpson&quot;</span></span>
<span class="line"><span style="color:#24292e;">        fullname[0] = &quot;Bart&quot;; // fullname数组的第一个元素修改为&quot;Bart&quot;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(p.getName()); // &quot;Homer Simpson&quot;还是&quot;Bart Simpson&quot;?</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Person {</span></span>
<span class="line"><span style="color:#24292e;">    private String[] name;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public String getName() {</span></span>
<span class="line"><span style="color:#24292e;">        return this.name[0] + &quot; &quot; + this.name[1];</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setName(String[] name) {</span></span>
<span class="line"><span style="color:#24292e;">        this.name = name;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>引用类型参数的传递，调用方的变量，和接收方的参数变量，指向的是同一个对象。双方任意一方对这个对象的修改，都会<strong>影响对方</strong>（因为指向同一个对象嘛）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Main {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Person p = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">        String bob = &quot;Bob&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        p.setName(bob); // 传入bob变量</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(p.getName()); // &quot;Bob&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        bob = &quot;Alice&quot;; // bob改名为Alice</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(p.getName()); // &quot;Bob&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Person {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private String name;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public String getName() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return this.name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void setName(String name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.name = name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Main {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Person p = new Person();</span></span>
<span class="line"><span style="color:#24292e;">        String bob = &quot;Bob&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        p.setName(bob); // 传入bob变量</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(p.getName()); // &quot;Bob&quot;</span></span>
<span class="line"><span style="color:#24292e;">        bob = &quot;Alice&quot;; // bob改名为Alice</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(p.getName()); // &quot;Bob&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Person {</span></span>
<span class="line"><span style="color:#24292e;">    private String name;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public String getName() {</span></span>
<span class="line"><span style="color:#24292e;">        return this.name;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setName(String name) {</span></span>
<span class="line"><span style="color:#24292e;">        this.name = name;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>两次都返回Bob，这还是由于字符串的不可变性。</p>`,171),o=[p];function t(c,i,r,y,u,d){return n(),a("div",null,o)}const b=s(l,[["render",t]]);export{h as __pageData,b as default};
