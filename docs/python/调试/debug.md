## 如何在 vscode debug python

在 VS Code 中，你可以使用内置的调试器来调试 Python 代码。下面是一些简单的步骤：

1. 打开 VS Code，并在左侧菜单中选择“调试”选项卡。
2. 点击“添加配置”按钮，然后选择“Python”配置。
3. 这将创建一个`.vscode/launch.json`文件，其中包含一个名为“Python: Current File”的配置。你可以使用这个配置来调试当前打开的 Python 文件，或者创建其他配置来调试其他 Python 文件。
4. 在你想要设置断点的行上单击编辑器左侧的行号，或者在你的代码中手动添加`import pdb; pdb.set_trace()`语句来在代码中设置断点。
5. 然后点击 VS Code 调试器工具栏中的绿色“开始调试”按钮。这将启动你的 Python 代码，并在遇到断点时暂停执行。
6. 你可以使用调试器工具栏上的控件来继续执行代码，逐步执行代码，查看变量值等等。

这只是一个简单的示例，你可以在 VS Code 文档中找到更详细的说明和示例。


```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Current File",
      "type": "python",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal",
      "justMyCode": true
    }
  ]
}
```