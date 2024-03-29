library(qrcode)

# geneerere QR koder for landingssidene

# Generate QR codes
for (i in 1:5) {
  url <- paste0("https://julieaaj.github.io/rebus_page/pasw_qr_", i, ".html")
  qr_code <- qr_code(url)
  plot(qr_code)
  # Add a title
  title(main = paste("Post", i))
}
