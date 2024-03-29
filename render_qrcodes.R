library(qrcode)

# geneerere QR koder for landingssidene
# Generer QR-koder
for (i in 1:5) {
  url <- paste0("https://dinserver.com/landing_", i, ".html")
  qr_code <- qrcode::qrcode_gen(url)
  plot(qr_code)
}

