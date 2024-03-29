library(quarto)

# render the pages 

render_task_pages <- function() {
  for (i in 1:5) {
    quarto::quarto_render(paste0("task_", i, ".qmd"))
  }
}

# Call this function to render all task pages to HTML
render_task_pages()