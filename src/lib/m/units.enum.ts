/**
 * Author:  Thomas Goodwin
 * Company: Geon Technologies, LLC
 */
/**
 * sigplot.m.UNITS as an enumeration.  The original structure is an enumerated
 * tuple of fields.  These enumerations match the order of that structure.
 *
 * See SigPlot for more information.
 * @preferred
 */
export enum Units {
    /** None, U, */
    None                         = 0,
    /** Time, sec, */
    Time                         = 1,
    /** Delay, sec, */
    Delay                        = 2,
    /** Frequency, Hz, */
    Frequency                    = 3,
    /** Time code format, , */
    TimeCode                     = 4,
    /** Distance, m, */
    Distance                     = 5,
    /** Speed, m/s, */
    Speed                        = 6,
    /** Acceleration, m/sec^2, */
    Acceleration                 = 7,
    /** Jerk, m/sec^3, */
    JerkMSec3                    = 8,
    /** Doppler, Hz, */
    Doppler                      = 9,
    /** Doppler rate, Hz/sec, */
    DopplerRate                  = 10,
    /** Energy, J, */
    Energy                       = 11,
    /** Power, W, */
    Power                        = 12,
    /** Mass, g, */
    Mass                         = 13,
    /** Volume, l, */
    Volume                       = 14,
    /** Angular power density, W/ster, */
    AngularPower                 = 15,
    /** Integrated power density, W/rad, */
    IntegratedPowerWrad          = 16,
    /** Spatial power density, W/m^2, */
    SpatialPower                 = 17,
    /** Integrated power density, W/m, */
    IntegratedPowerWm            = 18,
    /** Spectral power density, W/MHz, */
    SpectralPower                = 19,
    /** Amplitude, U, */
    Amplitude                    = 20,
    /** Real, U, */
    Real                         = 21,
    /** Imaginary, U, */
    Imaginary                    = 22,
    /** Phase, rad, */
    PhaseRad                     = 23,
    /** Phase, deg, */
    PhaseDeg                     = 24,
    /** Phase, cycles, */
    PhaseCyc                     = 25,
    /** 10Log, U */
    Log10                        = 26,
    /** 20Log, U */
    Log20                        = 27,
    /** Magnitude, U, */
    Magnitude                    = 28,
    /** Unknown, U, */
    Unknown1                     = 29,
    /** Unknown, U, */
    Unknown2                     = 30,
    /** General dimensionless, , */
    General                      = 31,
    /** Counts, , */
    Counts                       = 32,
    /** Angle, rad, */
    AngleRad                     = 33,
    /** Angle, deg, */
    AngleDeg                     = 34,
    /** Relative power, dB, */
    RelativePowerdB              = 35,
    /** Relative power, dBm, */
    RelativePowerdBm             = 36,
    /** Relative power, dBW, */
    RelativePowerdBW             = 37,
    /** Solid angle, ster, */
    SolidAngle                   = 38,
    /** Distance, ft, */
    DistanceFt                   = 40,
    /** Distance, nmi, */
    DistanceNmi                  = 41,
    /** Speed, ft/sec, */
    SpeedFtSec                   = 42,
    /** Speed, nmi/sec, */
    SpeedNmiSec                  = 43,
    /** Speed, knots=nmi/hr, */
    SpeedNmiHr                   = 44,
    /** Acceleration, ft/sec^2, */
    AccelerationFtSec2           = 45,
    /** Acceleration, nmi/sec^2, */
    AccelerationNmiSec2          = 46,
    /** Acceleration, knots/sec, */
    AccelerationKnotsSec         = 47,
    /** Acceleration, G, */
    AccelerationG                = 48,
    /** Jerk, G/sec, */
    JerkGSec                     = 49,
    /** Rotation, rps, */
    RotationRPS                  = 50,
    /** Rotation, rpm, */
    RotationRPM                  = 51,
    /** Angular velocity, rad/sec, */
    AngularVelocityRadSec        = 52,
    /** Angular velocity, deg/sec, */
    AngularVelocityDegSec        = 53,
    /** Angular acceleration, rad/sec^2, */
    AngularAccelerationRadSec2   = 54,
    /** Angular acceleration, deg/sec^2, */
    AngularAccelerationDegSec2   = 55,
    /** Latitude, deg, */
    Latitude                     = 60,
    /** Longitude, deg, */
    Longitude                    = 61,
    /** Altitude, ft, */
    AltitudeFt                   = 62,
    /** Altitude, m */
    AltitudeM                    = 63,
}
