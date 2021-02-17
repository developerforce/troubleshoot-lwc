# troubleshoot-lwc
Base Lightning Web Components Trailhead Troubleshooting Lightning Web Components 

## Download The Componets 
In this module, you use Visual Studio Code (VS Code) to edit code. Open VS Code and clone this GitHub repo.

1. In VS Code, open the Command Palette by pressing **Ctrl+Shift+P** (Windows) or **Cmd+Shift+P** (macOS).
2. Enter `git`.
3. Select **Git: Clone**. 
4. Enter `https://github.com/developerforce/troubleshoot-lwc.git` and press **Enter**.
5. Select **Desktop** then click **Select Repository Location**.

## Create DX Project

1. Open the Command Palette
2. Enter `sfdx`.
3. Select **SFDX: Create Project**. 
4. Select **Standard**.
5. Enter `troubleshoot-lwc` as the project name.
6. Press **Enter**.
7. Select **Desktop** for folder to store the project.
8. Click **Create Project**.
9. Click **Overwrite**.

## Authorize Your Trailhead Playground

1. Open the Command Palette
2. Eenter `sfdx`.
3. Select **SFDX: Authorize an Org**.
4. Press **Enter** to accept the Project Default login URL option.
5. Press **Enter** to accept the default alias.
This opens the Salesforce login in a separate browser window.
6. Log in using your Trailhead Playground credentials.
If prompted to allow access, click **Allow**.

## Push to Playground

1. Right-click the **default** folder under force-app/main.
2. Click **SFDX: Deploy Source to Org**.

## Assign Permission Set

1. Click **View**, then select **Terminal**. This opens a terminal window inside Visual Studio Code. The terminal defaults to the top-level directory of the project.
2. Run this command in a terminal to assign the Solutions Full Access permission set to the default user.
```
sfdx force:user:permset:assign -n Solutions_Full_Access
```

## View the Solutions App

1. In your Playground, In App Launcher, search for `sol`.
2. Select **Solutions**.