library(quarto)

 # Create task pages

create_task_qmd <- function(task_number) {
  qmd_content <- paste0("# Task ", task_number, "\n\nDetails for Task ", task_number, "\n\n...other content...")
  qmd_path <- paste0("task_", task_number, ".qmd")
  writeLines(qmd_content, qmd_path)
}

# Create .qmd files for each task
for (i in 1:5) {
  create_task_qmd(i)
}

