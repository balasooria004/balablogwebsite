import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const dataList = [
  

];
app.get("/", (req, res) => {
    res.render("index.ejs",{
  
    });
  });
  app.get("/post", (req, res) => {
    res.render("post.ejs",{
  
    });
  });

  app.post("/", (req, res) => {
    const url=req.body["url"];
    const content=req.body["content"];
    const title=req.body["title"];
    const contenttoshowin=req.body["contenttoshowin"];
    const newdata={url,content,title,contenttoshowin};
    dataList.push(newdata);
    res.render("index.ejs",{
  data:dataList,
    });
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });