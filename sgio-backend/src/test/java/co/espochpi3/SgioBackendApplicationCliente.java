package co.espochpi3;

import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SgioBackendApplicationCliente {
	
	@MockBean
	private PacienteRepository repository;
	
	@Test
	public void createPacienteTest() {
		Paciente paciente = new Paciente("1004121387","Kevin","Morocho","Ibarra","km@gmail.com","","",24,"");
		when(repository.save(paciente)).thenReturn(paciente);
	}

}
