package co.espochpi3;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;

public class CitaTest {
	@Autowired
	private CitaRepository obj;
	@Test
	@Rollback(false)
	public void CrearCita() {
		Cita cita = new Cita();
		obj.save(cita);			
	}

}
