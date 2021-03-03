# troubleshoot-lwc
Download Components for the Troubleshooting Lightning Web Components Trailhead Badge

## Open VS Code and clone this GitHub repo.

1. In VS Code, open the Command Palette by pressing **Ctrl+Shift+P** (Windows) or **Cmd+Shift+P** (macOS).
2. Enter `git`.
3. Select **Git: Clone**. 
4. Enter `https://github.com/developerforce/troubleshoot-lwc.git` and press Enter.
5. Select **Desktop** then click **Select Repository Location**.

## Create DX Project

1. Open the Command Palette.
2. Enter `sfdx`.
3. Select **SFDX: Create Project**. 
4. Select **Standard**.
5. Enter `troubleshoot-lwc` as the project name and press Enter.
6. Select **Desktop** for folder to store the project.
7. Click **Create Project**.
8. Click **Overwrite**.

## Authorize Your Trailhead Playground

1. Open the Command Palette.
2. Enter `sfdx`.
3. Select **SFDX: Authorize an Org**.
4. Press **Enter** to accept the Project Default login URL option.
5. Press **Enter** to accept the default alias.
Salesforce login opens in a separate browser window.
6. Log in using your Trailhead Playground credentials.
7. If you're prompted to allow access, click **Allow**.

## Deploy to Playground

1. Right-click the **default** folder under force-app/main.
2. Click **SFDX: Deploy Source to Org**.

## Assign Permission Set

1. Click **View**, then select **Terminal**. A terminal window opens in Visual Studio Code. The terminal defaults to the top-level directory of the project.
2. Assign the Solutions Full Access permission set to the default user by running this command in the terminal:
```
sfdx force:user:permset:assign -n Solutions_Full_Access
```

## View the Solutions App

1. In your Playground, In App Launcher, search for `sol`.
2. Select **Solutions**.
