const express = require("express");
const path = require("path");
const fs = require("fs");
const { default: axios } = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/meta/image', function(req, res, next) {
  let pageImg = req.query.pageImg;
  res.writeHead(200,{'content-type':'image/jpg'});
  fs.createReadStream(__dirname + `/public/metaimg/${pageImg}`).pipe(res);
});

function replaceHTMLData(data, title, desc, keywords, image){
  return (data
  .replace(/__TITLE__/g, title)
  .replace(/__DESCRIPTION__/g, desc)
  .replace(/__KEYWORDS__/g, keywords)
  .replace(/__IMAGE__/g, image))
}

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    let title = "Revo | Home";
    let description = "Revo is a decentralized and public blockchain ecosystem that brings scalability and high performaces for enterprise solutions at no cost.";
    let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
    let image = "https://revo.network/meta/image?pageImg=home.png";
    data = replaceHTMLData(data, title, description, keywords, image);
    res.send(data)
  });
});

app.get("/public-api", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    let title = "Revo | Api";
    let description = "Online dataset is retrieved by single fully indexed Revo Core node istance powering current official block explorer.";
    let keywords = "revo,blockchain,technology,public,api";
    let image = "https://revo.network/meta/image?pageImg=api.png";
    data = replaceHTMLData(data, title, description, keywords, image);

    res.send(data)
  });
});

// Dynamic Meta Data

app.get("/docs-api/:pathname", async (req, res) => {
  const { pathname } = req.params;

  const metaData = (await axios.post('https://data.revo.network/meta/info', { pathname })).data;

  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    let title = `Revo | Api - ${metaData.title}`;
    let description = metaData.description;
    let keywords = metaData.keywords;
    let image = "https://revo.network/meta/image?pageImg=api.png";
    data = replaceHTMLData(data, title, description, keywords, image);

    res.send(data)
  });
});

app.get("/map", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    let title = "Revo | Node Map";
    let description = "Discover Revo full nodes distribuition on globe map";
    let keywords = "revo,blockchain,technology,nodes,map,geolocal";
    let image = "https://revo.network/meta/image?pageImg=map.png";
    data = replaceHTMLData(data, title, description, keywords, image);

    res.send(data)
  });
});

app.get("/news", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

      let title = "Revo | News";
      let description = "Latest news from Revo Technologies";
      let keywords = "revo,blockchain,technology,news";
      let image = "https://revo.network/meta/image?pageImg=news.png"
      data = replaceHTMLData(data, title, description, keywords, image);
  
      res.send(data)
  });
});

app.get("/news/:pathname", async (req, res) => {
  const { pathname } = req.params;

  const metaData = (await axios.post('https://data.revo.network/meta/info', { pathname })).data;

  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

      let title = `Revo | News - ${metaData.title}`;
      let description = metaData.description;
      let keywords = metaData.keywords;
      let image = metaData.imgUrl
      data = replaceHTMLData(data, title, description, keywords, image);
  
      res.send(data)
  });
});

app.get("/partners", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

      let title = "Revo | Partners";
      let description = "Companies working and developing with Revo blockchain technologies";
      let keywords = "revo,blockchain,technology,partners,companies";
      let image = "https://revo.network/meta/image?pageImg=partners.png"
      data = replaceHTMLData(data, title, description, keywords, image);
  
      res.send(data)
  });
});

app.get("/technology", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

      let title = "Revo | Technology";
      let description = "Revo is a Decentralized Blockchain,taking advance of a full featured ethereum virtual machine ecosystem, with sidechains, lightning network and storage subsystem.";
      let keywords = "revo,blockchain,technology,utxo,evm,x86,lightning,network,pos,sidechain,domains,storage";
      let image = "https://revo.network/meta/image?pageImg=technology.png"
      data = replaceHTMLData(data, title, description, keywords, image);
  
      res.send(data)
  });
});

//Dynamic Meta

app.get("/technology/:pathname", async (req, res) => {
  const { pathname } = req.params;

  const metaData = (await axios.post('https://data.revo.network/meta/info', { pathname })).data;

  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    let title = `Revo | Technology - ${metaData.title}`;
    let description = metaData.description;
    let keywords = metaData.keywords;
    let image = metaData.imgUrl
    data = replaceHTMLData(data, title, description, keywords, image);

    res.send(data)
  });
});

app.get("/ecosystem", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

      let title = "Revo | Ecosystem";
      let description = "About page description.";
      let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
      data = replaceHTMLData(data, title, description, keywords);
  
      res.send(data)
  });
});

app.get("/members", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

      let title = "Revo | Team Members";
      let description = "Meet full Revo Technologies development Team, a full dedicated squad working on a public and open blockchain ecosystem";
      let keywords = "revo,blockchain,technology,team,members";
      let image = "https://revo.network/meta/image?pageImg=members.png"
      data = replaceHTMLData(data, title, description, keywords, image);
  
      res.send(data)
  });
});

app.get("/notarize-document", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

      let title = "Revo | Coming Soon..";
      let description = "About page description.";
      let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
      data = replaceHTMLData(data, title, description, keywords);
  
      res.send(data)
  });
});

app.get("/defi", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    
      let title = "Revo | Coming Soon..";
      let description = "About page description.";
      let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
      data = replaceHTMLData(data, title, description, keywords);
  
      res.send(data)
  });
});

app.get("/domains", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    
    let title = "Revo | Coming Soon..";
    let description = "About page description.";
    let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
    data = replaceHTMLData(data, title, description, keywords);

    res.send(data)
  });
});

app.get("/create-nft", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    
    let title = "Revo | Coming Soon..";
    let description = "About page description.";
    let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
    data = replaceHTMLData(data, title, description, keywords);

    res.send(data)
  });
});

app.get("/project-docs", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    
    let title = "Revo | Coming Soon..";
    let description = "About page description.";
    let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
    data = replaceHTMLData(data, title, description, keywords);

    res.send(data)
  });
});

app.get("/develop", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    
    let title = "Revo | Coming Soon..";
    let description = "About page description.";
    let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
    data = replaceHTMLData(data, title, description, keywords);

    res.send(data)
  });
});

app.get("/build", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    
    let title = "Revo | Coming Soon..";
    let description = "About page description.";
    let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
    data = replaceHTMLData(data, title, description, keywords);

    res.send(data)
  });
});

app.get("/deploy", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    
    let title = "Revo | Coming Soon..";
    let description = "About page description.";
    let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
    data = replaceHTMLData(data, title, description, keywords);

    res.send(data)
  });
});

app.get("/wiki", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    
    let title = "Revo | Coming Soon..";
    let description = "About page description.";
    let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
    data = replaceHTMLData(data, title, description, keywords);

    res.send(data)
  });
});

app.get("/training", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    
    let title = "Revo | Coming Soon..";
    let description = "About page description.";
    let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
    data = replaceHTMLData(data, title, description, keywords);

    res.send(data)
  });
});

app.get("/tutorials", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    
    let title = "Revo | Coming Soon..";
    let description = "About page description.";
    let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
    data = replaceHTMLData(data, title, description, keywords);

    res.send(data)
  });
});

app.get("/:pathname", (req, res) => {
  const { pathname } = req.params;
  const routes = ['public-api','docs-api', 'map', 'news', 'partners', 'technology', 'ecosystem', 'members', 'notarize-document', 'defi', 'domains', 'create-nft', 'project-docs', 'build', 'develop', 'deploy', 'training', 'wiki', 'tutorials', 'meta'];
  if(routes.includes(pathname)){

  }else{
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return console.log(err);
      }
      let title = "Revo | Error 404";
      let description = "Revo is a decentralized and public blockchain ecosystem that brings scalability and high performaces for enterprise solutions at no cost.";
      let keywords = "revo,blockchain,decentralized,distribuited,pos,public,open,crypto,technology,staking,network";
      let image = "https://revo.network/meta/image?pageImg=home.png";
      data = replaceHTMLData(data, title, description, keywords, image);
      res.send(data)
    });
  }
});

app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})