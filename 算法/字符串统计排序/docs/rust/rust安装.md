## 如何在 mac 上安装 rust

**一般情况下我们只需要到第二步输入 1 选择默认安装即可**

环境变量被添加到 .profile 和 .zshev
```sh
This path will then be added to your PATH environment variable by
modifying the profile files located at:

  ~/.profile
  ~/.zshenv

You can uninstall at any time with rustup self uninstall and
these changes will be reverted.

Current installation options:


   default host triple: aarch64-apple-darwin
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
>1
```

要在 Mac 上安装 Rust，可以按照以下步骤进行：

1. 打开终端应用程序。
2. 安装 Rustup，这是 Rust 的官方安装程序。可以使用以下命令在终端中安装 Rustup：

   ````
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```
   
   这个命令会自动下载和安装 Rustup，并提示你接受许可协议和选择安装选项。
   
3. 安装 Rust 编译器。在终端中运行以下命令：

   ````
   rustup install stable
   ```
   
   这个命令会下载和安装最新版本的稳定版 Rust 编译器。

4. 现在，Rust 已经安装完成。可以使用以下命令验证 Rust 是否正确安装：

   ````
   rustc --version
   ```
   
   这个命令会显示 Rust 编译器的版本信息。

安装 Rust 后，你可以使用 Rust 编译器编写、构建和运行 Rust 代码。如果你需要升级 Rust 的版本，可以运行 `rustup update` 命令更新 Rustup 和 Rust 编译器。