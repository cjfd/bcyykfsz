package main

import (
	_ "eproducts-trace/routers"
	beego "github.com/beego/beego/v2/server/web"
)

func main() {
	beego.Run()
}

