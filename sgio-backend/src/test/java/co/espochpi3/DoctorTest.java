package co.espochpi3;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest

@AutoConfigureTestDatabase(replace = Replace.NONE)
public class DoctorTest {
	@Autowired
	private DoctorRepository obj;
	@Test
	@Rollback(false)
	public void CrearDoctor() {
		Doctor doctor = new Doctor("1004157896","Juan","Perez","","Ibarra","");
		obj.save(doctor);			
	}

}
