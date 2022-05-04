Paddle.Setup({ vendor: Number(process.env.VENDOR_ID) });

if (process.env.SANDBOX === "true") {
  Paddle.Environment.set("sandbox");
}

window.PRODUCT_ID = Number(process.env.PRODUCT_ID);
