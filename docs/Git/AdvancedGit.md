# Advanced Git

## Submodules

- Commands for working with submodules

```bash
git submodule add <repository> <path>
git submodule init # Initialize the submodule
git submodule update # Update the submodule
git submodule update --init --recursive # Initialize and update the submodule
git submodule update --remote # Update the submodule to the latest commit
git submodule update --remote --merge # Update the submodule to the latest commit and merge the changes
git submodule update --remote --rebase # Update the submodule to the latest commit and rebase the changes
git submodule foreach <command> # Run a command in each submodule
git clone --recurse-submodules <repository> # Clone a repository with submodules
```
