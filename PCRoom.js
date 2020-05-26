function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg.startsWith("!레식PC방 ")) {
        sp = msg.substr(7).split(" ");
        const count = 21;
        let u = org.jsoup.Jsoup.connect("http://rainbow6pcbang.pmang.com/?mKey=2&sKey=1&ctrl=pcbang%3Apcbang_list&keyword=" + sp[0] + "&page=" + sp[1]).get()
        var box = [];
        for (i = 1; i < u.select(".pcbang").size() - 1; i++) {
            var pc_name = u.select(".pcbang").get(i).text().toUpperCase();
            var pc_tel = u.select(".tel").get(i).text()
            var pc_add = u.select(".address").get(i).text()
            box.push(i + ".\n🏷이름 : " + pc_name + "\n📞 전화번호 : " + pc_tel + "\n🗺 주소 : " + pc_add + "\n")
        }
        replier.reply(box.join("\n").trim())
    }
