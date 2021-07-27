package co.espochpi3;



import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class SgioBackendApplicationTests {
	
	@Autowired
	private PacienteService service;
	@MockBean
	private PacienteRepository repository;
	
	@Autowired
	private DoctorService serviced;
	@MockBean
	private DoctorRepository repositoryd;
	
	
	
	@Test
	public void getPacienteTest() {
		when(repository.findAll()).thenReturn(Stream.
					of(new Paciente("1004121388","Kevin","Morocho","Ibarra","km@gmail.com","","",24,"")).collect(Collectors.toList()));
		assertEquals(1,service.getAll().size());
	}
	

	
	@Test
	public void getDoctorTest() {
		when(repositoryd.findAll()).thenReturn(Stream.
					of(new Doctor("1004157896","Juan","Perez","","Ibarra","")).collect(Collectors.toList()));
		assertEquals(1,serviced.getAll().size());
	}
}
