学习笔记
一、js 表达式
1、运算符
()优先级最高
member，主要表现点运算符，eg：a.b；new.target
call:优先级低于 member，eg：new a()['b']; =>(new a())['b'];new a()是么，member 高于 call；
2、表达式
lefthand expression

rightthand expression

单目运算符：
delete a.d；typeof b;
**:乘方；
唯一一个右结合的运算符；3**2**4 = 3**(2\*\*4)
四则运算
更低运算符
== === != !==
位运算符：
& ^ |
逻辑运算最低： && ||，短路原则，可代替 if
条件运算符 ?: typeof 1 === 'number'?1:0

3、类型转换
Number，string，Boolean，Symbol 转换为 object 发生装箱转换
new Number(1) =>Number {1}
等同于 Object(1)

拆箱转换 object =>其他
调用 ToPremitive
字符串场景 toString
number 场景 valueof

二、语句（简单语句，组合语句，声明）
1、运行时，runtime
competition Record
[[type]]:normal,break,continue,return,throw
[[value]]:基本类型，
[[target]]:label
2、简单语句
expressionStatement:var a=b;
EmptyStatemen:;
DebuggerStatement:debugger,断点调试
ThrowStatement：throw new Error('err');
ContinueStatement:条件控制
BreakStatement:终止；
returnStatement:返回值
3、符合语句
BlockStatement：{语句}
ifStatement
SwitchStatement:js 推荐使用 if-else
iterrationStatement
withStatement:不推荐使用,with({a:1}){a=2;}
labelledStatement:
eg：
var count = 0;
outer:
for (var i = 0; i < 10; i++) {
for (var j = 0; j < 10; j++) {
if (i == 5 && j == 5) {
break outer;
}
count++;
}
}
cosole.log(count); //55

tryStatement:try{}catch(){}finally{}

4、声明
FunctionDeclaration(函数声明)：function(){}
GenertorDeclaration：function* (){}
AsyncFunctionDeclaration:async function(){}
AsyncGeneratorDeclaration: async function* (){}
variableDeclaration:var
classDeclaration: Class Person{};new Person();
LexicalDeclaration
预处理机制
所有声明都有预处理机制；

5、宏任务（macroTask）及微任务（microTask）
宏任务：js 引擎的任务，settimeout
微任务：js 引擎内部的任务（仅有 promise）
事件循环 event loop： get code=>exxcute=>wait=>

6、函数调用
exection Context
realm 内置对象；
LexicalEnvironment:this,new.target,super,变量
