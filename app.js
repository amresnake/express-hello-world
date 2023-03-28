const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="https://enamto--uat.sandbox.my.salesforce-sites.com/lightning/lightning.out.js"></script>
  </head>
  <body>
    <p>xxxxxx hello world xxxxxx</p>
    <p>xxxxxxxxxxxxxxxxxxxxxxxxx</p>
    <br/><br/>


    <div id="auraCmpId"></div>

    
    <br/><br/>
    <p>xxxxxxxxxxxxxxxxxxxxxxxxx</p>
    <p>xxxxxxxxxxxxxxxxxxxxxxxxx</p>
  </body>
  <script>
    $Lightning.use("c:APP_AnnuaireEducation", function () {
        $Lightning.createComponent("c:LC_AnnuaireEducation",
            {
            },
            "auraCmpId",
            function (cmp) {
                console.log("IT WORKSSSSSSS");
            }
        )
    });
  </script>
</html>
`
