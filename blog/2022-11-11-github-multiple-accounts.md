---
slug: github-multiple-accounts
title: GitHub Multiple Accounts
authors: [pavan]
# authors:
#   name: [pavan]
#   title: tech-talks Core Team
#   url: https://github.com/mrpavan
#   image_url: https://github.com/mrpavan.png
tags: [github, ssh]
---

To use two GitHub accounts on a Mac over ssh, you will need to set up separate ssh keys for each account.

Follow the steps below:

- Generate a new ssh key for your second GitHub account. You can do this by running the ssh-keygen command in the terminal and following the prompts. Make sure to specify a different file name for the key than the one you used for your first account.

- Add the public key for your second account to your GitHub account. You can do this by going to the "SSH and GPG keys" section of your GitHub profile settings and clicking the "New SSH key" button. Then, paste the contents of the public key file (located in the ~/.ssh directory on your Mac) into the "Key" field and give it a descriptive name.

- Add the private key for your second account to your ssh agent. You can do this by running the following command in the terminal:

  ```bash title="username@hostname:~$"
  ssh-add ~/.ssh/<private key file name>
  ```

- Modify your ssh config file to specify which ssh key to use for each GitHub account. To do this, open the ~/.ssh/config file in a text editor and add the following lines:
 <!--truncate-->

  ```bash title="username@hostname:~$nano ~/.ssh/config"
  Host github.com-<account1username>
    HostName github.com
    User git
    IdentityFile ~/.ssh/<private key file name for account 1>

  Host github.com-<account2username>
    HostName github.com
    User git
    IdentityFile ~/.ssh/<private key file name for account 2>
  ```

Replace `<account1username>` and `<account2username>` with the respective usernames for each account, and `<private key file name for account 1>` and `<private key file name for account 2>` with the respective private key file names for each account.

:::tip check access by running below on terminal 
```bash 
ssh -T git@github.com-account1username
``` 

Hi account1username! You've successfully authenticated, but GitHub does not provide shell access.

:::

Repeat for *account2username*. 

**Congratulations!** you have successfuly authenticated and verified access to both the accounts and you may clone and do other operations by running git commands. Use the **modified ssh URLs** for your repositories to push and pull code from your separate accounts. For example, to push to a repository owned by your second account, you would use a URL like ```git@github.com-<account2username>:<username>/<repository>.git```.

For any reason, if you ever wanted to check available identities in your ssh agent or delete them use below commands in your terminal

:::caution Run with extreme caution

To list all identities ```ssh-add -l``` or `ssh-add -L`

To remove all identities ```ssh-add -D```

:::