
# CANDIDE :deciduous_tree:

## Description :speech_balloon:

Candide is an open source project that aims primarily to display terrains and plants in 3D based on previously provided data. It has its roots in another open source project called Vana Principia, which aims to provide a tool that can scan a terrain and provide the user with recommendations for plants that are suitable for their environment and how these will interact. (To know more about this project fill free to visite their website [https://www.vanaprincipia.fr/](https://www.vanaprincipia.fr/))

The Candide project offers a simple and easy-to-use user interface in high resolution for the most immersive user experience possible. Users can explore different types of plants, such as trees, flowers... as well as their placement on specific terrains. They also have access to various data concerning all the displayed plants.

  - **Authors**: Christopher BOLARD / Léo LABEAUME / Louis COBIGO / Manon LAVENIER
  - **Technology stack**: This project is mainly based on React Three Fiber.
  - **Status**:  1.0.0 Every change would be notified into [CHANGELOG](CHANGELOG.md).

## Visuals :framed_picture:
![](plants.gif)

----
## Dependencies :wrench:

| Dependency | Version |
| -------- | ------- |
| @react-three/drei | $^9.56.12    |
| @react-three/fiber | ^8.10.1  |
| @testing-library/jest-dom | ^5.16.5 |
| @testing-library/react | ^13.4.0  |
| @testing-library/user-event | ^13.5.0   |
| @types/three | ^0.149.0  |
| react | ^18.2.0 |
| react-dom | ^18.2.0 |
| react-router-dom | ^6.8.1 |
| react-scripts | 5.0.1 |
| three | ^0.149.0 |
| web-vitals | ^2.1.4 |

## Installation :gear:

### First thing first, you need to setup the project :

1. Fork the repo (click the Fork button at the top right of this page)
2. Clone your fork locally in a terminal
3. cd to parent directory where you want your clone to be, 
4. ```git clone https://github.com/<your_github_username>/candide.git```
5. ```cd candide```


### Once you have open the project in your favorite IDE open the terminal and run :

**```npm install```** 

Add a folder name ```models``` at the root then add all the necessary models.
You can find all models in this drive :[Models files](https://drive.google.com/drive/folders/1D3G-_I8TR3O_4E8dm6BXLe3TgPDZHaIX?usp=share_link)

**`npm start`**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) than TADAM :sparkles: you can view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Usage :books:
As mentioned earlier, the main objective of this project is to represent data in 3D format. Therefore, all display is based on reading a data file that we created in JSON format.

The Json should look like this :

```
{
    "env": {
        "type" : "sand"
        "light": {
            "var1":100,
            "var2":10,
            "var3":100 
        },
        "x": 100,
        "y": 100
    },

    "plants" : [
        {
            "name" : "huaranhuay",
            "x" : 30,
            "y" : 70,
            "description" : {
                "type" : "tree",
                "size" : "big",
                "width" : 100,
                "height" : 100,
                "text" : "This is a tree",
                "watering" : "once a week",
                "wateringAmount" : "1 liter",
                "flowering" : "2024-01-01",
                "family" : "oak"
            }

        },

        {
            "name" : "pisonay",
            "x" : 80,
            "y" : 40,
            "description" : {
                "type" : "flower",
                "size" : "big",
                "width" : 100,
                "height" : 100,
                "text" : "This is a flower",
                "watering" : "once a week",
                "wateringAmount" : "1 liter",
                "flowering" : "2024-01-01",
                "family" : "oak"
            }
        }
    ]
}
```
| Variable | Explanation |
| -------- | ------- |
| "type" | For now grass or sand  |
| "name" | Should be the same as the model  |
| "x" | Represents its placement on the x-axis  |
| "y" | Represents its placement on the y-axis  |

----
## Known issues :clipboard:

- [ ] Increasing speed of loading
- [ ] Adding new 3D models
- [ ] Connect data to Vana 2.0 and Plantarium

## Getting help

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.

## Getting involved

We welcome contributions from anyone interested in improving this project! There are a few ways to get involved:

### Reporting Issues

If you find a bug or have a suggestion for improving this project, please let us know by opening an issue on our GitHub repository. When you create an issue, please provide as much detail as possible about the problem or suggestion.

### Contributing Code

If you're interested in contributing code to this project, we recommend first reviewing our contributing guidelines [CONTRIBUTING](CONTRIBUTING.md). These guidelines provide information on our code style and how to submit a pull request.

If you have an idea for a new feature or improvement that isn't covered by an existing issue, feel free to open a new issue to discuss the idea with the community and get feedback.

### Providing Feedback

If you have feedback on the project or want to discuss its direction, we encourage you to participate in our community forum. This is a great place to ask questions, share your thoughts on the project, and connect with other contributors and users.


----

## Open source licensing info
2. This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)

----

## Credits and references :link:

Thanks to [https://www.vanaprincipia.fr/](https://www.vanaprincipia.fr/) for giving us this challenge. 
Thanks to [Hanandess](https://www.vanaprincipia.fr/) for their 3D plants.
