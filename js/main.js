Parse.initialize("9jh4AE4AlkBOwlQe5EfhEZJIetT32o8KSX6belTk", "R8tUBho8x7QEQk6lqtw4oKm349wI8UFxtQQzgU0E");
    
var UserObject = Parse.Object.extend("Pessoa");
var userObject = new UserObject();

function salvar(pessoa) {
	userObject.save(pessoa, {
	  success: function(object) {
		$(".success").show();
		console.log(object.get("nome"));
	  },
	  error: function(model, error) {
		$(".error").show();
		console.log(error);
	  }
	});
}

$("#form").submit(function(event) {
	var objeto = {nome: $("#nomeIpt").val(), idade: parseInt($("#idadeIpt").val()), cidade: $("#cidadeIpt").val()};
	event.preventDefault();
	salvar(objeto);
	$("#nomeIpt").val("");
	$("#idadeIpt").val("");
	$("#cidadeIpt").val("");
});