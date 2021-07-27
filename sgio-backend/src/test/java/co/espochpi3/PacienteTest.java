package co.espochpi3;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest

@AutoConfigureTestDatabase(replace = Replace.NONE)
public class PacienteTest {
	@Autowired
	private PacienteRepository obj;
	@Test
	@Rollback(false)
	public void CrearPaciente() {
		Paciente paciente = new Paciente("1004121389","Kevin","Morocho","Ibarra","km@gmail.com","","",24,"");
		obj.save(paciente);			
	}
	
		
}