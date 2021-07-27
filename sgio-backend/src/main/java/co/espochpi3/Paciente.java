																/*
 -------------------------------------------------------------------
|
| CRUDyLeaf	- A Domain Specific Language for generating Spring Boot 
|			REST resources from entity CRUD operations.
| Author: Omar S. Gómez (2020)
| File Date: Fri Jul 17 12:32:06 COT 2020
| 
 -------------------------------------------------------------------
																*/
package co.espochpi3;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;	
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
	
@Entity
@Table(name = "Paciente")
public class Paciente {
	
	@Id
	@Column(name="id_paciente")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPaciente;
	
	@Column(name="Ced_paciente", nullable=false, length=10)
	private String cedPaciente;
	
	@Column(name="Nombres", nullable=false, length=50)
	private String nombresPaciente;
	
	@Column(name="Apellidos", nullable=false, length=50)
	private String apellidosPaciente;
	
	@Column(name="Direccion", nullable=false, length=80)
	private String direccionPaciente;
	
	@Column(name="email", nullable=false, length=50)
	private String emailPaciente;
	
	@Column(name="Telefono", nullable=false, length=10)
	private String telefonoPaciente;
	
	@Column(name="Alergias", nullable=false, length=80)
	private String alergiasPaciente;
	
	@Column(name="Edad", nullable=false)
	private int edadPaciente;
	
	@Column(name="Observaciones", nullable=false, length=10)
	private String observacionesPaciente;

	public Paciente() {}
	
	public Paciente(String cedPaciente, String nombresPaciente, String apellidosPaciente, String direccionPaciente, String emailPaciente, String telefonoPaciente,
			String alergiasPaciente, int edadPaciente, String observacionesPaciente) {
		// TODO Auto-generated constructor stub
		super();
		this.cedPaciente=cedPaciente;
		this.nombresPaciente=nombresPaciente;
		this.apellidosPaciente=apellidosPaciente;
		this.direccionPaciente=direccionPaciente;
		this.emailPaciente=emailPaciente;
		this.telefonoPaciente=telefonoPaciente;
		this.alergiasPaciente=alergiasPaciente;
		this.edadPaciente=edadPaciente;
		this.observacionesPaciente=observacionesPaciente;
		
	}
	public Long getIdPaciente() {
		return idPaciente;
	}
	
	public void setIdPaciente(Long idPaciente) {
		this.idPaciente = idPaciente;
	}
	
	public String getCedPaciente() {
		return cedPaciente;
	}
	
	public void setCedPaciente(String cedPaciente) {
		this.cedPaciente = cedPaciente;
	}
	
	public String getNombresPaciente() {
		return nombresPaciente;
	}
	
	public void setNombresPaciente(String nombresPaciente) {
		this.nombresPaciente = nombresPaciente;
	}
	
	public String getApellidosPaciente() {
		return apellidosPaciente;
	}
	
	public void setApellidosPaciente(String apellidosPaciente) {
		this.apellidosPaciente = apellidosPaciente;
	}
	
	public String getDireccionPaciente() {
		return direccionPaciente;
	}
	
	public void setDireccionPaciente(String direccionPaciente) {
		this.direccionPaciente = direccionPaciente;
	}
	
	public String getEmailPaciente() {
		return emailPaciente;
	}
	
	public void setEmailPaciente(String emailPaciente) {
		this.emailPaciente = emailPaciente;
	}
	
	public String getTelefonoPaciente() {
		return telefonoPaciente;
	}
	
	public void setTelefonoPaciente(String telefonoPaciente) {
		this.telefonoPaciente = telefonoPaciente;
	}
	
	public String getAlergiasPaciente() {
		return alergiasPaciente;
	}
	
	public void setAlergiasPaciente(String alergiasPaciente) {
		this.alergiasPaciente = alergiasPaciente;
	}
	
	public int getEdadPaciente() {
		return edadPaciente;
	}
	
	public void setEdadPaciente(int edadPaciente) {
		this.edadPaciente = edadPaciente;
	}
	
	public String getObservacionesPaciente() {
		return observacionesPaciente;
	}
	
	public void setObservacionesPaciente(String observacionesPaciente) {
		this.observacionesPaciente = observacionesPaciente;
	}
	
}
