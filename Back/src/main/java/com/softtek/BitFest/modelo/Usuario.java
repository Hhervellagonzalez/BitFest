package com.softtek.BitFest.modelo;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;



@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUsuario;
    @Column(length = 60, nullable = false)
    private String nombre;
    @Column(length = 100, nullable = false)
    private String apellidos;
    @Column(length = 60, nullable = false)
    private String nombreUsuario;
    @Column(length = 100, nullable = false)
    private String email;
    @Column(length = 60, nullable = false)
    private String contraseña;
    @Column
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date fechaRegistro;
    @Column(length = 100, nullable = false)
    private String imagen;

    @Enumerated(EnumType.STRING)
    private Rol rol;

}