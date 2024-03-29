create_task_page <- function(task_number) {
  # Opprette en midlertidig fil for innholdet
  tmp_file <- tempfile(fileext = ".qmd")
  
  # Innholdet for oppgavesiden
  content <- paste("# Oppgave ", task_number, "\nHer er detaljene for oppgave ", task_number)
  
  # Skrive innholdet til den midlertidige filen
  writeLines(content, tmp_file)
  
  # Bruke den midlertidige filen som input til quarto_render
  quarto_render(input = tmp_file, 
                output_format = "html", 
                output_file = paste0("task_", task_number, ".html"))
  
  # Slette den midlertidige filen
  file.remove(tmp_file)
}

# Opprette sider for 5 oppgaver
for (i in 1:5) {
  create_task_page(i)
}
