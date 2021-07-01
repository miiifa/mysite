function header(rootDir) {
  $.ajax({
    url: rootDir + "_header.html", // 読み込むHTMLファイル
    cache: false,
    async: false,
    dataType: "html",
    success: function(html) {
      html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
      document.write(html);
    }
  });
}
function footer(rootDir) {
  $.ajax({
    url: rootDir + "_footer.html", // 読み込むHTMLファイル
    cache: false,
    async: false,
    dataType: "html",
    success: function(html) {
      html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
      document.write(html);
    }
  });
}
function aside(rootDir) {
  $.ajax({
    url: rootDir + "_aside.html", // 読み込むHTMLファイル
    cache: false,
    async: false,
    dataType: "html",
    success: function(html) {
      html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
      document.write(html);
    }
  });
}
function index(rootDir) {
  $.ajax({
    url: rootDir + "index.html", // 読み込むHTMLファイル
    cache: false,
    async: false,
    dataType: "html",
    success: function(html) {
      html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
      document.write(html);
    }
  });
}
function profile(rootDir) {
  $.ajax({
    url: rootDir + "profile.html", // 読み込むHTMLファイル
    cache: false,
    async: false,
    dataType: "html",
    success: function(html) {
      html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
      document.write(html);
    }
  });
}